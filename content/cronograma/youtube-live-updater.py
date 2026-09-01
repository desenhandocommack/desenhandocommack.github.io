import obspython as obs
import urllib.request
import json

github_token = ""
github_owner = ""
github_repo = ""
workflow_file = "update-live-status.yml"
github_ref = "main"


def dispatch_workflow():
    if not github_token or not github_owner or not github_repo:
        obs.script_log(obs.LOG_WARNING, "GitHub token/owner/repo não configurados.")
        return

    url = f"https://api.github.com/repos/{github_owner}/{github_repo}/actions/workflows/{workflow_file}/dispatches"

    payload = json.dumps({
        "ref": github_ref,
        "inputs": { "event-type": "live" }
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, method="POST")
    req.add_header("Authorization", f"Bearer {github_token}")
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("Content-Type", "application/json")

    try:
        with urllib.request.urlopen(req) as response:
            status = response.getcode()
            if status == 204:
                obs.script_log(obs.LOG_INFO, f"Workflow disparado")
            else:
                obs.script_log(obs.LOG_WARNING, f"Resposta inesperada: {status}")
    except urllib.error.HTTPError as e:
        obs.script_log(obs.LOG_ERROR, f"Erro HTTP ao disparar workflow: {e.code} {e.read().decode()}")
    except Exception as e:
        obs.script_log(obs.LOG_ERROR, f"Erro ao disparar workflow: {e}")


def on_event(event):
    if event == obs.OBS_FRONTEND_EVENT_STREAMING_STARTED:
        obs.script_log(obs.LOG_INFO, "Stream iniciada.")
        dispatch_workflow()
    if event == obs.OBS_FRONTEND_EVENT_STREAMING_STOPPED:
        obs.script_log(obs.LOG_INFO, "Stream encerrada.")
        dispatch_workflow()


def script_load(settings):
    obs.obs_frontend_add_event_callback(on_event)


def script_properties():
    props = obs.obs_properties_create()
    obs.obs_properties_add_text(props, "github_token", "GitHub Token", obs.OBS_TEXT_PASSWORD)
    obs.obs_properties_add_text(props, "github_owner", "GitHub Owner", obs.OBS_TEXT_DEFAULT)
    obs.obs_properties_add_text(props, "github_repo", "GitHub Repo", obs.OBS_TEXT_DEFAULT)
    obs.obs_properties_add_text(props, "workflow_file", "Nome do arquivo do workflow", obs.OBS_TEXT_DEFAULT)
    obs.obs_properties_add_text(props, "github_ref", "Branch (ref)", obs.OBS_TEXT_DEFAULT)
    return props


def script_update(settings):
    global github_token, github_owner, github_repo, workflow_file, github_ref
    github_token = obs.obs_data_get_string(settings, "github_token")
    github_owner = obs.obs_data_get_string(settings, "github_owner")
    github_repo = obs.obs_data_get_string(settings, "github_repo")
    workflow_file = obs.obs_data_get_string(settings, "workflow_file") or "update-live-status.yml"
    github_ref = obs.obs_data_get_string(settings, "github_ref") or "main"


def script_defaults(settings):
    obs.obs_data_set_default_string(settings, "workflow_file", "update-live-status.yml")
    obs.obs_data_set_default_string(settings, "github_ref", "main")


def script_description():
    return "Dispara o workflow update-live-status no GitHub Actions ao iniciar/parar a stream."

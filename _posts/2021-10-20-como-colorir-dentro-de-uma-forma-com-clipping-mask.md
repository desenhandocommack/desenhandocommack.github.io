---
layout: post
title: Como colorir dentro de uma forma usando clipping mask
category: Tutoriais
thumbnail: >-
  /assets/uploads/post9-clipping-mask/capa-clipping-mask_700x250-blog.png
description: Como colorir dentro de formas usando clipping mask no Photoshop, Krita e Firealpaca
---

![Banner thumbnail clipping mask no Photoshop, Krita e Firealpaca](/assets/uploads/post9-clipping-mask/capa-clipping-mask_700x250-blog.png)

Um recurso útil na hora de fazer pintura digital é utilizar máscaras de recorte, e nesse post eu vou mostrar como pintar dentro de uma forma qualquer sem vazar para os lados usando o Photoshop, Krita e Firealpaca.

<!-- more -->

Eu gosto de usar esse recurso principalmente para fazer as sombras do meu desenho ou para separar cada parte de um desenho em camadas diferentes, só que limitadas a uma silhueta geral, e acho que isso pode te ajudar a organizar melhor as suas pinturas por aí.

# Photoshop

No Photoshop isso é chamado de Clipping Mask, e ele funciona assim:

Primeiro criamos a nossa camada base, e é o conteúdo que estiver nela que vai servir como o recorte. No meu exemplo vou utilizar um círculo.

![Imagem Clipping Mask no Photoshop - Passo 1](/assets/uploads/post9-clipping-mask/img1_clipping-mask-no-photoshop_camada-e-conteudo.png)

Crie uma nova camada acima dessa camada base → segure o Alt do teclado entre as duas camadas → e clique com o botão esquerdo do mouse.

![Imagem Clipping Mask no Photoshop - Passo 2](/assets/uploads/post9-clipping-mask/img2_clipping-mask-no-photoshop_nova-camada-para-o-clippingmask.png)

Agora tudo que você fizer na camada que tem a setinha pra baixo, está restrito ao conteúdo da camada que está embaixo. Fiz um círculo rosa do mesmo tamanho pra fora do círculo azul, e tudo que está fora desses limites foi "cortado".

![Imagem Clipping Mask no Photoshop - Passo 3](/assets/uploads/post9-clipping-mask/img3_clipping-mask-no-photoshop_resultado.png)

Se você precisar criar novas camadas que também estejam restritas a camada base, basta criar uma nova camada acima de tudo isso e repetir o processo. Você pode se organizar com quantas camadas preferir.

![Imagem Novas camadas no Clipping Mask - Photoshop](/assets/uploads/post9-clipping-mask/img4_clipping-mask-no-photoshop_novas-camadas.png)

Para tirar uma camada do clipping você também utiliza o alt e clica entre elas. Ao fazer isso você remove todas as camadas que tive acima do local onde você liberou a máscara.

_Link de referência sobre máscaras de corte no Photoshop:_

[Clipping masks no Photoshop site oficial](https://helpx.adobe.com/photoshop-elements/using/clipping-masks.html)

# Krita

No Krita também chamamos esse processo de Clipping Mask, mas nele funciona um pouco diferente, tudo fica dentro de um grupo de camadas.

Então, crie um grupo de camadas → crie a sua camada base _(conteúdo a)_ → arraste para dentro desse grupo e adicione o conteúdo que você quer pra ela. Novamente eu fiz apenas um círculo.

![Imagem Clipping Mask no Krita - Passo 1](/assets/uploads/post9-clipping-mask/img5_clipping-mask-krita_grupo-de-camadas.png)

Crie uma nova camada acima dessa e clique no botão de herança alpha.

Agora essa camada com herança alpha vai funcionar como máscara de corte, ou seja, quando você pincelar nessa camada ele vai se limitar apenas ao conteúdo existente na camada ou nas camadas que estão abaixo.

![Imagem Clipping Mask no Krita com herança alfa - Passo 2](/assets/uploads/post9-clipping-mask/img6_clipping-mask-krita_botao-heranca-alfa.png)

Quando precisar adicionar novas camadas basta criar uma nova camada acima da sua camada base e ativar o botão de herança alpha em cada camada nova adicionada.

**Tenho um vídeo no meu canal secundário mostrando o processo de como fazer sombras no desenho usando o clipping mask passo a passo no Krita.**

[Como fazer sombras no desenho usando clipping mask no Krita](https://www.youtube.com/watch?v=j2UqjrKyw-k&feature=youtu.be)

_Link de referência sobre o clipping mask e herança alfa no Krita:_

[Clipping mask e herança alfa no krita](https://docs.krita.org/pt_PT/tutorials/clipping_masks_and_alpha_inheritance.html)

# Firealpaca

Também temos uma forma de fazer um clipping mask no Firealpaca, nele funciona assim:

Crie uma camada base já com o conteúdo que você quer que sirva como o recorte e adicione um conteúdo a ela. Fiz um círculo como exemplo.

![Imagem Clipping Mask no Firealpaca - Passo 1](/assets/uploads/post9-clipping-mask/img7_clipping-mask-firealpaca_criar-camada.png)

Crie uma nova camada acima dela e selecione a opção recorte que está logo acima.

![Imagem Clipping Mask no Firealpaca - Passo 2](/assets/uploads/post9-clipping-mask/img8_clipping-mask-firealpaca_opcao-recorte.png)

Agora é só testar! Tudo o que você fizer nessa camada que está com a opção _recorte_ ativada, vai estar limitado a camada debaixo.

_Link de referência sobre máscara de corte no Firealpaca:_

[O que é clipping mask](http://firealpaca.com/en/topics/What+is+Clipping%3F)

Essa postagem foi para complementar [esse vídeo](https://youtu.be/eN96Xdem2Lc) onde eu mostro como tirar as linhas de um desenho. Se você não veio por esse vídeo talvez te interesse esse conteúdo.

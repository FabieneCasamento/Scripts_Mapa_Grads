# Scripts_Mapa_Grads
Scripts, em .gs, para gerar mapas de hora em hora pelo programa Grads.

Para rodar no terminal linux: opengrads -blc "run NOVOPortaoVentoSP_litoral.gs"

há o mapa de chuva, pelo grads, com a chuva de uma em uma hora, e a soma da chuva diária.
Necessita da malhas, das linhas das divisas dos municípios, o brmap_hires, e o barn.gs (Capecbarn.gs e teste cbarn2.gs) para padronizar as cores das palhetas. 

Para gerar a previsão de chuva => NOVOPortaoVentoSP_litoral.gs
Gerar o índices que indicam a possibilidade de formação do tornado, como o SWEAT => SULTORNADO.gs

Mapas da região de São Paulo, com os índices SWEAT e CAPE, que indicam a formação de tempestade de leve à severa e até extrema, segundo o arquivo SWEAT-CAPE_LitoralSP.gs

No arquivo INDKeTT_LitoralSP.gs relata a previsão do TOTALS (indicando o potencial para tempestades) e o K (se a chuva sera isolada à torrencial). 

E a pasta figuras, mostra os modelos gerados por essas figuras. 


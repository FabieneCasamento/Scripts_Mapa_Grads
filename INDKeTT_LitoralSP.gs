'reinit'

******************************
**Fabiene Casamento*******
*****************************
******************************


'open ../../../../../wrf15_all.ctl'
'sdfopen ../linhaTopocorr.nc'
'set display color white'

*'set mpdset brmap_hires'
*'set mpdset malhas'

'set mpdset malhas brmap_hires'

'set mpt 29 1 0 5'
*linha fina no final
*'set mpt 29 1 0 1'
*correto acima
*'set mpt 29 2 0 4'
*vermelho
'set mpt 2 1 0 13'
'set mpt 1 1 0 13'
'set mpt 0 1 0 13'



'set mproj scaled'

'set grads off'

*http://www.jamstec.go.jp/frsgc/research/iprc/nona/GrADS/set-axes.html
*http://www6.cptec.inpe.br/ManualGrADS/gradcomdsetylopts.html
*color borda da latitude
'set ylopts 1 3 0.06'  
'set xlopts 1 3 0.09'


count=1


ti='2'

tf='97'
*tf='52'
def=1

*********************legenda*********


'set t 'def
'q time'
dataan=subwrd(result,3)
datean=subwrd(result,3,4,12)
horaan=substr(dataan,1,3)
diaan=substr(dataan,4,2)
mes=substr(dataan,6,3)
mesan=mesc(mes)
anoan=substr(dataan,9,5)
*say horaan
*say mesan


***************************
while (ti <= tf)


'set lat -25.0 -23.0'
'set lon -48.3 -45'



'set vpage 0.0 5.76 0.0 8.5'


*Sao Paulo chuva de uma em uma hora
'set t 'ti
'q time'
*datafig1=subwrd(result,3)

datai=subwrd(result,3)
date_ti=subwrd(result,3,4,12)
hora_ti=substr(datai,1,3)
dia_ti=substr(datai,4,2)
mes=substr(datai,6,3)
mes_ti=mesc(mes)
ano_ti=substr(datai,9,5)

'set gxout shaded'

*=================================
*===================cores==1h====K====================

*COLOR BARS for K
'set rgb 65 255 255 255'


'set rgb 40 31  61 250'
'set rgb 41 0 160 0 '
'set rgb 42 255 250 0 '
'set rgb 43 255 150 0'
'set rgb 44 180 0 0'
'set rgb 45 161 0 199'

'set grads off'
'set clevs  20 25  30  35  40 50 '
'set ccols  65 40 41  42  43  44 '


*=======================================================================
'd indk.1'

'set font 1'
'testecbarn2.gs'

'set gxout contour'

'd topo.2(t=1)'




'set font 1'
'set strsiz 0.08 0.08'
'set string 1 tr 2'
'draw string 1.0 0.4 ANALISE:'
'draw string 1.2 0.2 'diaan'/'mesan'/'anoan'  '
*'draw string 1.3 7.5  MODELO: WRF 15KM'

*'set strsiz 0.1 0.1'
'set string 1 tr 5'
*'set font 2'




*'draw string 5.2 1.5  K<20 =>Nenhuma ||20-25=> Chuva Isolada || 25-30 => Chuva +Dispersa'
*'draw string 5.0 1.35  K 30-35=> Chuva Dispersa || > 35 => ++++ Chuva torrencial'

'draw title INDICE K 'hora_ti'/'dia_ti'/'mes_ti'/'ano_ti' \ > 35 Chuva Torrencial. '

*-\\\\\----------------------proxima figura ou figura ao lado-----------\\\\\-------
'set vpage 5.0 10.8 0.0 8.5'

'set grads off'



'set lat -25.0 -23.0'
'set lon -48.3 -45'


'set cmin 0.5'




*Sao Paulo chuva de uma em uma hora
'set t 'ti
'q time'
*datafig1=subwrd(result,3)

datai=subwrd(result,3)
date_ti=subwrd(result,3,4,12)
hora_ti=substr(datai,1,3)
dia_ti=substr(datai,4,2)
mes=substr(datai,6,3)
mes_ti=mesc(mes)
ano_ti=substr(datai,9,5)



*===================cores=======TT====================

*COLOR BARS for TT
'set rgb 65 255 255 255'


'set rgb 40 100 100 240 '
'set rgb 41 0 160 0 '
'set rgb 42 255 250 0 '
'set rgb 43 255 150 0'
'set rgb 61 255 150 0'
'set rgb 62 255 70 0'
'set rgb 44 180 0 0'
'set rgb 45 161 0 199'
'set rgb 46 240 0  0'

'set rgb 55 220 220 255'
'set rgb 56 150 150 255 '
'set rgb 57 70 70 200 '
'set rgb 58 0 160 0 '
'set rgb 59 0 210 0 '
'set rgb 60 255 250 0 '
'set rgb 61 255 150 0'
'set rgb 62 255 70 0'
'set rgb 63 180 0 0'
'set rgb 64 161 0 199'

'set grads off'
'set clevs 40  45  50 55 60 '
'set ccols 65 41  42 43  46 '


'set gxout shaded'

'd indtt.1'

'testecbarn2.gs'
*=============fundo=========
*---------------------------mascara--------
*'set lon 305 311'
*'set gxout contour'
*'set t 1'
*'d topo.2'
'set gxout contour'
'd topo.2(t=1)'

*'set t 'ti

*-------------------------------------------

'set font 1'
'set strsiz 0.08 0.08'
'set string 1 tr 2'

'draw string 5.7 0.4 MODELO: '
'draw string 5.7 0.2 WRF 15KM'

*'draw string 4.8 1.5  TOTALS < 44 => Fraco Potencial || 44-50 => Trovoadas'
*'draw string 5.3 1.35  50-55=> Temp. severa e dispersa || >55 => + Tempestade e Raios'

*'draw string 5.2 7.5  ANALISE: 'horaan'/'diaan'/'mesan'/'anoan' '


'draw title INDICE TT 'hora_ti'/'dia_ti'/'mes_ti'/'ano_ti' \ > 55 M+ Trovoadas e Tempestades'




if (count<10)
'printim /p1/operacao/scripts/wrf/NOVOVentoPortoSP/Litoral_INS-SP00'count'horas.gif x1480 y700'

 
endif
if (count<=99)
if (count>=10)

'printim /p1/operacao/scripts/wrf/NOVOVentoPortoSP/Litoral_INS-SP0'count'horas.gif x1480 y700'
endif
else

'printim /p1/operacao/scripts/wrf/NOVOVentoPortoSP/Litoral_INS-SP'count'horas.gif x1480 y700'

endif
ti=ti+1
count=count+1
*'q pos'
'c'
endwhile
'set grads off'
*====cores somar=======
'set rgb 20 0 0 0'
'set rgb 21 228 254 253'
'set rgb 22 126 193 238'
'set rgb 23 58 95 202'
'set rgb 24 0 205 102'
'set rgb 25 0 255 129'
'set rgb 26 255 255 0'
'set rgb 27 254 2 0'
'set clevs 1 5 15 30 50 70 100 130'
'set ccols 20 21 22 23 24 25 26 27'
*===================================
*===================cores==========================
*COLOR BARS for RAIN
'set rgb 17 240 240 240'
'set rgb 18 230 230 230'
'set rgb 19 220 220 255'
'set rgb 20 190 190 255'
'set rgb 21 150 150 255 '
'set rgb 22 100 100 240 '
'set rgb 23 70 70 200 '
'set rgb 24 40 40 150 '
'set rgb 25 0 120 0 '
'set rgb 26 0 160 0 '
'set rgb 27 0 210 0 '
'set rgb 28 0 240 0'
'set rgb 29 255 250 0 '
'set rgb 30 255 200 0 '
'set rgb 31 255 150 0'
'set rgb 32 255 70 0'
'set rgb 33 180 0 0'
'set rgb 34 90 0 0'
'set rgb 35 40 0 0'
'set clevs 0.2 0.5 1 2 3 4 5 6 7 8 9 10 13 16 19 22 25 30'
'set ccols 0 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35'
*=======================================================================
quit
function mesc(mes)
if mes=JAN;res=01;endif
if mes=FEB;res=02;endif
if mes=MAR;res=03;endif
if mes=APR;res=04;endif
if mes=MAY;res=05;endif
if mes=JUN;res=06;endif
if mes=JUL;res=07;endif
if mes=AUG;res=08;endif
if mes=SEP;res=09;endif
if mes=OCT;res=10;endif
if mes=NOV;res=11;endif
if mes=DEC;res=12;endif
return (res)

return



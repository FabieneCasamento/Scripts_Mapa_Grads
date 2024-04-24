'reinit'

******************************
**Fabiene Casamento*******
*****************************
******************************


'open ../../wrf15_all.ctl'
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

'set gxout shaded'

'set mproj scaled'

'set grads off'

*http://www.jamstec.go.jp/frsgc/research/iprc/nona/GrADS/set-axes.html
*http://www6.cptec.inpe.br/ManualGrADS/gradcomdsetylopts.html
*color borda da latitude
'set ylopts 1 3 0.06'  
'set xlopts 1 3 0.09'


count=1
def='1'
def2='49'
def3='97'
ti='2'
*tf='5'
tf='97'
*tf='145'
*tf='10'
while (ti <= tf)

'set lat -25.0 -23.0'
'set lon -48.3 -45'

*'set lat -25.0 -23.2'
*'set lon -48.0 -45'
*'set lon -49 -45'

*'set vpage 0.2 5.75 0.1 8.5'
'set vpage 0.0 5.76 0.0 8.5'

*antes de plotar
'set cmin 0.5'

*===================cores==1h========================

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
'set rgb 35 161 0 199'
'set grads off'
'set clevs 0.2 2   3  5   7  9  10  11  13 15 20 25 30 35 '
'set ccols 0  20  22  23  26 27 28  29 30 31 32 33 34 35'

*=======================================================================

*Sao Paulo chuva de uma em uma hora
*'set t 'ti
*'q time'
*datafig1=subwrd(result,3)

'set t 'ti
'q time'
datai=subwrd(result,3)
date_ti=subwrd(result,3,4,12)
hora_ti=substr(datai,1,3)
dia_ti=substr(datai,4,2)
mes=substr(datai,6,3)
mes_ti=mesc(mes)
ano_ti=substr(datai,9,5)
*say dia_ti' 'mes_ti' 'ano_ti

*================fonte marcos=======
*date=subwrd(result,3,4,12)
*dia=substr(data,4,2)
*mes=substr(data,6,3)
*mes1=mesc(mes)
*ano=substr(data,9,5)
*say dia' 'mes1' 'ano

*datai=subwrd(result,3)
*date_in=subwrd(result,3,4,12)
*dia_in=substr(datai,4,2)
*mes=substr(datai,6,3)
*mes_in=mesc(mes)
*ano_in=substr(datai,9,5)

*dataf=subwrd(result,3)
*date_fi=subwrd(result,3,4,12)
*hora_fi=substr(dataf,1,3)
*dia_fi=substr(dataf,4,2)
*mes=substr(dataf,6,3)
*mes_fi=mesc(mes)
*ano_fi=substr(dataf,9,5)

*=================================

'd precip'
'set font 1'
'testecbarn2.gs'


'set gxout barb'
'set ccolor 14'

'd u;v;mag(u,v)'

'set grads off'

*'set font 1'
*'set strsiz 0.08 0.08'
*'set string 1 tr 2'
*'draw title PREC & VENTO 'hora'/'dia'/'mes'/'ano''
*'draw string 1.2 10.75 MODELO: WRF 15KM'
*'draw string 7.1 10.75 ANALISE: 'dia'/'mes'/'ano''
*'draw string 4.25 10.35 Acumulado nas ultimas 6h (mm) - 'hora'/'dia'/'mes'/'ano''
*'set font 0'
*'set string 1'
*'set strsiz 0.15'
*'draw string 1.2 10.75 MODELO: WRF(15KM)'
*'draw string 7.1 10.75 ANALISE: 'dia'/'mes_ti'/'ano''
*'draw string 4.25 10.35 Acumulado na ultima 1h (mm) - 'hora_ti'/'dia_ti'/'mes_ti'/'ano_ti''

'set font 1'
'set strsiz 0.08 0.08'
'set string 1 tr 2'
'draw title PREC 1 h (mm) & VENTO (m/s) \ 'hora_ti'/'dia_ti'/'mes_ti'/'ano_ti'-WRF:15KM'


*-----------------------proxima figura ou figura ao lado------------------


*'set mproj scaled'
*'set parea 0.3 8.3 1.2 10'

'set vpage 5.0 10.8 0.0 8.5'

*'set grid horizontal 3 2 1'

**oficial
*'set vpage 5.5 10.8 0.1 8.5'

'set grads off'

*'set lat -25.2 -22.8'
*'set lon -47.8 -45'

'set lat -25.0 -23.0'
'set lon -48.3 -45'

*'set lat -25.0 -23.2'
*'set lon -49 -45'

'set cmin 0.5'
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
*'set rgb 35 40 0 0'
'set rgb 35 161 0 199'
*'set clevs 0.2 1 3  4   5  8  9 10 13 16 19 22 25 30'
*'set ccols 0   20 21  22 23 26 27 28 29 30 31 32 33 34 35'

'set clevs 0.2 1  5 15 30 50 70 100 130'
'set ccols 0 22  24 27 29 32 33 34 35'
*===================================


if(ti<=48)
*'set mproj scaled'
'set cmin 0.5'
'set t 'def
'q time'
data=subwrd(result,3)
date=subwrd(result,3,4,12)
hora=substr(data,1,3)
dia=substr(data,4,2)
mes=substr(data,6,3)
mes0=mesc(mes)
ano=substr(data,9,5)


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


'set t 'ti
'q time'
data1=subwrd(result,3)
date1=subwrd(result,3,4,12)
hora1=substr(data1,1,3)
dia1=substr(data1,4,2)
mes=substr(data1,6,3)
mes1=mesc(mes)
ano1=substr(data1,9,5)

*'color.gs'
*'color 10 80 -kind white->red -sample'
*'color 5 75 5 -kind white-(0)->grainbow -sample'

'd sum(precip,time='data',time='data1')'

endif


if(ti>48 & ti<=97)
*'set mproj scaled'
*'set cmin 0.5'
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
*'set rgb 35 40 0 0'
'set rgb 35 161 0 199'

*'set clevs 0.2 1 3  4   5  8  9 10 13 16 19 22 25 30'
*'set ccols 0   20 21  22 23 26 27 28 29 30 31 32 33 34 35'

'set clevs 0.2 1  5 15 30 50 70 100 130'
'set ccols 0 22  24 27 29 32 33 34 35'
*===================================

'set t 'def2
'q time'
data=subwrd(result,3)
date=subwrd(result,3,4,12)
hora=substr(data,1,3)
dia=substr(data,4,2)
mes=substr(data,6,3)
mes0=mesc(mes)
ano=substr(data,9,5)
'set t 'ti
'q time'
data1=subwrd(result,3)
date1=subwrd(result,3,4,12)
hora1=substr(data1,1,3)
dia1=substr(data1,4,2)
mes=substr(data1,6,3)
mes1=mesc(mes)
ano1=substr(data1,9,5)

*'color.gs'
*'color 5 75 5 -kind white-(0)->grainbow -sample'

'd sum(precip,time='data',time='data1')'

endif

*outro criterio

if(ti> 97)
*'set mproj scaled'
'set cmin 0.5'
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
*'set rgb 35 40 0 0'
'set rgb 35 161 0 199'
*'set clevs 0.2 1 3  4   5  8  9 10 13 16 19 22 25 30'
*'set ccols 0   20 21  22 23 26 27 28 29 30 31 32 33 34 35'

'set clevs 0.2 1  5 15 30 50 70 100 130'
'set ccols 0 22  24 27 29 32 33 34 35'
*===================================

'set t 'def3
'q time'
data=subwrd(result,3)
date=subwrd(result,3,4,12)
hora=substr(data,1,3)
dia=substr(data,4,2)
mes=substr(data,6,3)
mes0=mesc(mes)
ano=substr(data,9,5)
say dia' 'mes' 'ano
'set t 'ti
'q time'
data1=subwrd(result,3)
date1=subwrd(result,3,4,12)
hora1=substr(data1,1,3)
dia1=substr(data1,4,2)
mes=substr(data1,6,3)
mes1=mesc(mes)
ano1=substr(data1,9,5)
*say dia1' 'mes1' 'ano1

*'color.gs'
*'color 10 80 -kind white->red -sample'
*'color 5 75 5 -kind white-(0)->grainbow -sample'


'd sum(precip,time='data',time='data1')'

endif


*'cbarn.gs'
'set font 1'
'testecbarn2.gs'

'set grads off'
'set font 1'
'set strsiz 0.08 0.08'
'set string 1 tr 2'

'draw string 5.7 8.2 ANALISE:'
'draw string 5.9 8.0 'diaan'/'mesan'/'anoan'  '

'draw string 5.7 0.4 MODELO: '
'draw string 5.7 0.2 WRF 15KM'


'draw title PREC (mm) 'hora'/'dia'/'mes0'/'ano' \ 'hora1'/'dia1'/'mes1'/'ano1'-WRF:15KM'

*'draw title Prec'data'\'data1'-WRF'

if (count<10)

'printim ../../../NOVOVentoPortoSP/NVentSP00'count'horas.gif x1480 y700' 
*'printim ../../../LITORALSP/NVentSP00'count'horas.gif x1000 y600' 

endif

if (count<=99)
if (count>=10)
'printim ../../../NOVOVentoPortoSP/NVentSP0'count'horas.gif x1480 y700'
*'printim ../../../LITORALSP/NVentSP0'count'horas.gif x1700 y950'

endif
else

'printim ../../../NOVOVentoPortoSP/NVentSP'count'horas.gif x1480 y700'
*'printim ../../../LITORALSP/NVentSP'count'horas.gif x1700 y950'

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

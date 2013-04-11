//Map { background-color: #fff; }

#zones [ZONE!='X']{
  [ZONE='A']{polygon-fill:#f02;line-color:darken(#f02, 5);}
  [ZONE='B']{polygon-fill:#fd0;line-color:darken(#fd0, 5);}
  [ZONE='C']{polygon-fill:#7f0;line-color:darken(#7f0, 5);}
  [zoom<=11]{line-width:0;}
  [zoom>=12]{line-width:1;}
  [zoom>=14]{line-width:2;}
  polygon-opacity:.35;
  line-smooth:.1;
  line-opacity:.5;
}

#center {
  point-file:url(img/tri.png);
  point-allow-overlap:true;
}

#center-out {
  point-file:url(img/tri-out.png);
  point-allow-overlap:true;
  image-filters: agg-stack-blur(5,5);
}


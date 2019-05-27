<template>
  <div class="details">
  <h2 style="font-size:30px">{{food.name}}</h2>
  <v-btn
<<<<<<< HEAD
   v-if="$store.state.isUserLoggedIn"
   dark
   class="btn"
   @click="add"
   >Add
=======
   dark
   class="btn"
   @click="add"
   >Log!
>>>>>>> a8c9a47ad360b32f4b2d780b5499ffc4d116688a
  </v-btn>
  <div class="infographic">
      <div class="row">
  <div class="column">
    <div  v-bind:class="[drop && !dropInfo ? enlarge : '', images]">
    <svg
       xmlns:dc="http://purl.org/dc/elem#ents/1.1/"
       xmlns:cc="http://creativecommons.org/ns#"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:svg="http://www.w3.org/2000/svg"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
       width="210mm"
       height="297mm"
       viewBox="0 0 210 297"
       version="1.1"
       id="svg1084"
       sodipodi:docname="drop.svg"
       inkscape:version="0.92.4 (5da689c313, 2019-01-14)">
      <defs
         id="defs1078" />
      <sodipodi:namedview
         id="base"
         pagecolor="#ffffff"
         bordercolor="#666666"
         borderopacity="1.0"
         inkscape:pageopacity="0.0"
         inkscape:pageshadow="2"
         inkscape:zoom="0.7"
         inkscape:cx="8.8356362"
         inkscape:cy="601.65133"
         inkscape:document-units="px"
         inkscape:current-layer="layer1"
         showgrid="false"
         showborder="false"
         inkscape:window-width="1920"
         inkscape:window-height="1001"
         inkscape:window-x="-9"
         inkscape:window-y="-9"
         inkscape:window-maximized="1" />
      <metadata
         id="metadata1081">
        <rdf:RDF>
          <cc:Work
             rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type
               rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g
         inkscape:label="Layer 1"
         inkscape:groupmode="layer"
         id="layer1">
        <g
           id="hover"
           @click="dropInfo=true"
           style="cursor:pointer"
           @mouseover="drop = true" @mouseleave="drop = false"
           transform="matrix(0.26130649,0,0,0.26368837,43.191033,4.4411751)"
           inkscape:label="#g3178">
          <path
             inkscape:connector-curvature="0"
             id="path1640"
             d="m -26.354132,40.732143 -18.789455,69.403377 -27.808392,61.10515 -43.591541,70.91216 -21.79576,67.14022 6.7642,52.05255 39.082066,49.035 67.642039,16.59645"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -23.365361,40.732143 18.5701135,69.403377 27.4837575,61.10515 43.082664,70.91216 21.54132,67.14022 -6.685239,52.05255 -38.625828,49.035 -66.852402,16.59645"
             id="path1642"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path1648"
             d="M -132.01905,361.3456 -24.850975,426.97705 -116.54352,242.15283"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path1650"
             d="M -24.850975,426.97705 -72.630215,171.49591"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path1652"
             d="m -45.143587,110.13552 20.292612,316.84153"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M 81.06604,361.3456 -24.850975,426.97705 65.771174,242.15283"
             id="path1660"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -24.850975,426.97705 22.68851,171.24067"
             id="path1662"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -4.7952475,110.13552 -24.850975,426.97705"
             id="path1664"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path2964"
             d="m -26.354132,40.732143 1.498066,-6.45809 1.490705,6.45809"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2966"
             d="m -232.88878,1578.0769 -115.2054,-28.572 -67.31242,-84.0935 c -37.02183,-46.2514 -66.82226,-84.58 -66.22318,-85.1746 0.59909,-0.5947 80.17482,47.3438 176.83496,106.5298 205.060947,125.5609 196.90423,120.4415 191.39715,120.1271 -2.35715,-0.1346 -56.12815,-13.1022 -119.49111,-28.8168 z"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2968"
             d="m -74.826245,1605.0494 c 3.540104,-3.5034 363.386375,-226.3862 365.502545,-226.3862 0.84143,0 -28.766,38.4409 -65.79429,85.4242 l -67.32413,85.4242 -111.906348,27.7182 c -61.548491,15.2451 -114.477777,28.3773 -117.620634,29.1827 -3.782593,0.9694 -4.748439,0.5086 -2.857143,-1.3631 z"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2980"
             d="m -87.339765,1605.0949 c 2.848948,-7.7073 335.036575,-683.43242 335.666775,-682.80223 3.16486,3.16486 78.27532,243.80663 78.27532,250.78143 0,19.6781 -23.48883,190.0888 -26.63817,193.259 -2.38249,2.3982 -331.025439,206.9721 -384.446782,239.3106 -2.408683,1.4581 -3.520064,1.2446 -2.857143,-0.5488 z"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2982"
             d="m -297.68339,1486.9024 c -105.28571,-64.5087 -192.95999,-118.7882 -194.83172,-120.621 -1.92202,-1.8821 -8.85826,-45.4654 -15.93724,-100.1404 l -12.5341,-96.808 40.10899,-123.8774 c 22.05995,-68.1326 40.97197,-122.92617 42.02672,-121.76349 2.08134,2.29433 336.88164,677.62359 336.88164,679.52749 0,0.6369 -0.96429,1.116 -2.14286,1.0647 -1.17857,-0.051 -88.28571,-52.8731 -193.57143,-117.3819 z"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2984"
             d="m -269.60078,1255.4319 -168.6744,-340.28379 80.2959,-130.73233 c 44.16274,-71.90278 80.9311,-130.15524 81.70746,-129.44992 1.63252,1.48314 177.244861,938.85044 176.10395,939.99134 -0.41717,0.4172 -76.662,-152.3692 -169.43291,-339.5253 z"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2986"
             d="m -87.568995,1592.2641 c -0.257427,-4.7558 171.60301,-926.88313 173.682444,-931.90337 1.784666,-4.30859 18.755231,21.7449 81.293091,124.80245 L 246.4441,915.41098 84.162335,1246.3228 C -81.334279,1583.7901 -87.3696,1595.9479 -87.568995,1592.2641 Z"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2988"
             d="m -87.534861,1555.8061 c -0.567471,-13.3951 68.558059,-1107.10303 70.637273,-1117.62685 1.962937,-9.93529 4.653266,-4.73279 51.405152,99.40617 L 83.841372,647.47556 -0.60697633,1102.3551 C -47.053568,1352.5389 -85.545133,1558.5204 -86.143791,1560.0918 c -0.598658,1.5714 -1.224639,-0.3571 -1.39107,-4.2857 z"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2990"
             d="m -186.86482,1106.8294 -86.18366,-460.82725 50.53969,-111.20079 c 45.01476,-99.04446 50.62873,-109.98704 51.35425,-100.09803 5.20678,70.97023 71.921129,1128.60997 71.307218,1130.45167 -0.458618,1.3759 -39.616488,-204.8707 -87.017498,-458.3256 z"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path2992"
             d="m -131.72695,992.06025 -36.77331,-577.68274 37.22778,-137.14286 37.227787,-137.14285 3.510611,12.85714 c 1.930837,7.07143 18.600491,69.21503 37.04368,138.09688 l 33.533066,125.23974 -36.437975,575.66855 c -20.040888,316.61769 -36.915054,576.14559 -37.498151,576.72869 -0.583094,0.5831 -17.608158,-258.897 -37.833488,-576.62255 z"
             style="fill:#afc6e9;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -26.354132,40.732143 -18.789455,69.403377 -27.808392,61.10515 -43.591541,70.91216 -21.79576,67.14022 6.7642,52.05255 39.082066,49.035 67.642039,16.59645"
             id="path2994"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path2996"
             d="m -23.365361,40.732143 18.5701135,69.403377 27.4837575,61.10515 43.082664,70.91216 21.54132,67.14022 -6.685239,52.05255 -38.625828,49.035 -66.852402,16.59645"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -132.01905,361.3456 -24.850975,426.97705 -116.54352,242.15283"
             id="path2998"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -24.850975,426.97705 -72.630215,171.49591"
             id="path3000"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -45.143587,110.13552 20.292612,316.84153"
             id="path3002"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3004"
             d="M 81.06604,361.3456 -24.850975,426.97705 65.771174,242.15283"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3006"
             d="M -24.850975,426.97705 22.68851,171.24067"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3008"
             d="M -4.7952475,110.13552 -24.850975,426.97705"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -26.354132,40.732143 1.498066,-6.45809 1.490705,6.45809"
             id="path3010"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -232.88878,1578.0769 -115.2054,-28.572 -67.31242,-84.0935 c -37.02183,-46.2514 -66.82226,-84.58 -66.22318,-85.1746 0.59909,-0.5947 80.17482,47.3438 176.83496,106.5298 205.060947,125.5609 196.90423,120.4415 191.39715,120.1271 -2.35715,-0.1346 -56.12815,-13.1022 -119.49111,-28.8168 z"
             id="path3012"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -74.826245,1605.0494 c 3.540104,-3.5034 363.386375,-226.3862 365.502545,-226.3862 0.84143,0 -28.766,38.4409 -65.79429,85.4242 l -67.32413,85.4242 -111.906348,27.7182 c -61.548491,15.2451 -114.477777,28.3773 -117.620634,29.1827 -3.782593,0.9694 -4.748439,0.5086 -2.857143,-1.3631 z"
             id="path3014"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -87.339765,1605.0949 c 2.848948,-7.7073 335.036575,-683.43242 335.666775,-682.80223 3.16486,3.16486 78.27532,243.80663 78.27532,250.78143 0,19.6781 -23.48883,190.0888 -26.63817,193.259 -2.38249,2.3982 -331.025439,206.9721 -384.446782,239.3106 -2.408683,1.4581 -3.520064,1.2446 -2.857143,-0.5488 z"
             id="path3016"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -297.68339,1486.9024 c -105.28571,-64.5087 -192.95999,-118.7882 -194.83172,-120.621 -1.92202,-1.8821 -8.85826,-45.4654 -15.93724,-100.1404 l -12.5341,-96.808 40.10899,-123.8774 c 22.05995,-68.1326 40.97197,-122.92617 42.02672,-121.76349 2.08134,2.29433 336.88164,677.62359 336.88164,679.52749 0,0.6369 -0.96429,1.116 -2.14286,1.0647 -1.17857,-0.051 -88.28571,-52.8731 -193.57143,-117.3819 z"
             id="path3018"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -269.60078,1255.4319 -168.6744,-340.28379 80.2959,-130.73233 c 44.16274,-71.90278 80.9311,-130.15524 81.70746,-129.44992 1.63252,1.48314 177.244861,938.85044 176.10395,939.99134 -0.41717,0.4172 -76.662,-152.3692 -169.43291,-339.5253 z"
             id="path3020"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -87.568995,1592.2641 c -0.257427,-4.7558 171.60301,-926.88313 173.682444,-931.90337 1.784666,-4.30859 18.755231,21.7449 81.293091,124.80245 L 246.4441,915.41098 84.162335,1246.3228 C -81.334279,1583.7901 -87.3696,1595.9479 -87.568995,1592.2641 Z"
             id="path3022"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -87.534861,1555.8061 c -0.567471,-13.3951 68.558059,-1107.10303 70.637273,-1117.62685 1.962937,-9.93529 4.653266,-4.73279 51.405152,99.40617 L 83.841372,647.47556 -0.60697633,1102.3551 C -47.053568,1352.5389 -85.545133,1558.5204 -86.143791,1560.0918 c -0.598658,1.5714 -1.224639,-0.3571 -1.39107,-4.2857 z"
             id="path3024"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -186.86482,1106.8294 -86.18366,-460.82725 50.53969,-111.20079 c 45.01476,-99.04446 50.62873,-109.98704 51.35425,-100.09803 5.20678,70.97023 71.921129,1128.60997 71.307218,1130.45167 -0.458618,1.3759 -39.616488,-204.8707 -87.017498,-458.3256 z"
             id="path3026"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#afc6e9;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -131.72695,992.06025 -36.77331,-577.68274 37.22778,-137.14286 37.227787,-137.14285 3.510611,12.85714 c 1.930837,7.07143 18.600491,69.21503 37.04368,138.09688 l 33.533066,125.23974 -36.437975,575.66855 c -20.040888,316.61769 -36.915054,576.14559 -37.498151,576.72869 -0.583094,0.5831 -17.608158,-258.897 -37.833488,-576.62255 z"
             id="path3028"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3030"
             d="m -26.354132,40.732143 -18.789455,69.403377 -27.808392,61.10515 -43.591541,70.91216 -21.79576,67.14022 6.7642,52.05255 39.082066,49.035 67.642039,16.59645"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -23.365361,40.732143 18.5701135,69.403377 27.4837575,61.10515 43.082664,70.91216 21.54132,67.14022 -6.685239,52.05255 -38.625828,49.035 -66.852402,16.59645"
             id="path3032"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3034"
             d="M -132.01905,361.3456 -24.850975,426.97705 -116.54352,242.15283"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3036"
             d="M -24.850975,426.97705 -72.630215,171.49591"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3038"
             d="m -45.143587,110.13552 20.292612,316.84153"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M 81.06604,361.3456 -24.850975,426.97705 65.771174,242.15283"
             id="path3040"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -24.850975,426.97705 22.68851,171.24067"
             id="path3042"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -4.7952475,110.13552 -24.850975,426.97705"
             id="path3044"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3046"
             d="m -26.354132,40.732143 1.498066,-6.45809 1.490705,6.45809"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3048"
             d="m -232.88878,1578.0769 -115.2054,-28.572 -67.31242,-84.0935 c -37.02183,-46.2514 -66.82226,-84.58 -66.22318,-85.1746 0.59909,-0.5947 80.17482,47.3438 176.83496,106.5298 205.060947,125.5609 196.90423,120.4415 191.39715,120.1271 -2.35715,-0.1346 -56.12815,-13.1022 -119.49111,-28.8168 z"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3050"
             d="m -74.826245,1605.0494 c 3.540104,-3.5034 363.386375,-226.3862 365.502545,-226.3862 0.84143,0 -28.766,38.4409 -65.79429,85.4242 l -67.32413,85.4242 -111.906348,27.7182 c -61.548491,15.2451 -114.477777,28.3773 -117.620634,29.1827 -3.782593,0.9694 -4.748439,0.5086 -2.857143,-1.3631 z"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3052"
             d="m -87.339765,1605.0949 c 2.848948,-7.7073 335.036575,-683.43242 335.666775,-682.80223 3.16486,3.16486 78.27532,243.80663 78.27532,250.78143 0,19.6781 -23.48883,190.0888 -26.63817,193.259 -2.38249,2.3982 -331.025439,206.9721 -384.446782,239.3106 -2.408683,1.4581 -3.520064,1.2446 -2.857143,-0.5488 z"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3054"
             d="m -297.68339,1486.9024 c -105.28571,-64.5087 -192.95999,-118.7882 -194.83172,-120.621 -1.92202,-1.8821 -8.85826,-45.4654 -15.93724,-100.1404 l -12.5341,-96.808 40.10899,-123.8774 c 22.05995,-68.1326 40.97197,-122.92617 42.02672,-121.76349 2.08134,2.29433 336.88164,677.62359 336.88164,679.52749 0,0.6369 -0.96429,1.116 -2.14286,1.0647 -1.17857,-0.051 -88.28571,-52.8731 -193.57143,-117.3819 z"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3056"
             d="m -269.60078,1255.4319 -168.6744,-340.28379 80.2959,-130.73233 c 44.16274,-71.90278 80.9311,-130.15524 81.70746,-129.44992 1.63252,1.48314 177.244861,938.85044 176.10395,939.99134 -0.41717,0.4172 -76.662,-152.3692 -169.43291,-339.5253 z"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3058"
             d="m -87.568995,1592.2641 c -0.257427,-4.7558 171.60301,-926.88313 173.682444,-931.90337 1.784666,-4.30859 18.755231,21.7449 81.293091,124.80245 L 246.4441,915.41098 84.162335,1246.3228 C -81.334279,1583.7901 -87.3696,1595.9479 -87.568995,1592.2641 Z"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3060"
             d="m -87.534861,1555.8061 c -0.567471,-13.3951 68.558059,-1107.10303 70.637273,-1117.62685 1.962937,-9.93529 4.653266,-4.73279 51.405152,99.40617 L 83.841372,647.47556 -0.60697633,1102.3551 C -47.053568,1352.5389 -85.545133,1558.5204 -86.143791,1560.0918 c -0.598658,1.5714 -1.224639,-0.3571 -1.39107,-4.2857 z"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3062"
             d="m -186.86482,1106.8294 -86.18366,-460.82725 50.53969,-111.20079 c 45.01476,-99.04446 50.62873,-109.98704 51.35425,-100.09803 5.20678,70.97023 71.921129,1128.60997 71.307218,1130.45167 -0.458618,1.3759 -39.616488,-204.8707 -87.017498,-458.3256 z"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3064"
             d="m -131.72695,992.06025 -36.77331,-577.68274 37.22778,-137.14286 37.227787,-137.14285 3.510611,12.85714 c 1.930837,7.07143 18.600491,69.21503 37.04368,138.09688 l 33.533066,125.23974 -36.437975,575.66855 c -20.040888,316.61769 -36.915054,576.14559 -37.498151,576.72869 -0.583094,0.5831 -17.608158,-258.897 -37.833488,-576.62255 z"
             style="fill:#afc6e9;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -26.354132,40.732143 -18.789455,69.403377 -27.808392,61.10515 -43.591541,70.91216 -21.79576,67.14022 6.7642,52.05255 39.082066,49.035 67.642039,16.59645"
             id="path3066"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3068"
             d="m -23.365361,40.732143 18.5701135,69.403377 27.4837575,61.10515 43.082664,70.91216 21.54132,67.14022 -6.685239,52.05255 -38.625828,49.035 -66.852402,16.59645"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -132.01905,361.3456 -24.850975,426.97705 -116.54352,242.15283"
             id="path3070"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="M -24.850975,426.97705 -72.630215,171.49591"
             id="path3072"
             inkscape:connector-curvature="0" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -45.143587,110.13552 20.292612,316.84153"
             id="path3074"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3076"
             d="M 81.06604,361.3456 -24.850975,426.97705 65.771174,242.15283"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3078"
             d="M -24.850975,426.97705 22.68851,171.24067"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3080"
             d="M -4.7952475,110.13552 -24.850975,426.97705"
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -26.354132,40.732143 1.498066,-6.45809 1.490705,6.45809"
             id="path3082"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -232.88878,1578.0769 -115.2054,-28.572 -67.31242,-84.0935 c -37.02183,-46.2514 -66.82226,-84.58 -66.22318,-85.1746 0.59909,-0.5947 80.17482,47.3438 176.83496,106.5298 205.060947,125.5609 196.90423,120.4415 191.39715,120.1271 -2.35715,-0.1346 -56.12815,-13.1022 -119.49111,-28.8168 z"
             id="path3084"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#214478;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -74.826245,1605.0494 c 3.540104,-3.5034 363.386375,-226.3862 365.502545,-226.3862 0.84143,0 -28.766,38.4409 -65.79429,85.4242 l -67.32413,85.4242 -111.906348,27.7182 c -61.548491,15.2451 -114.477777,28.3773 -117.620634,29.1827 -3.782593,0.9694 -4.748439,0.5086 -2.857143,-1.3631 z"
             id="path3086"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -87.339765,1605.0949 c 2.848948,-7.7073 335.036575,-683.43242 335.666775,-682.80223 3.16486,3.16486 78.27532,243.80663 78.27532,250.78143 0,19.6781 -23.48883,190.0888 -26.63817,193.259 -2.38249,2.3982 -331.025439,206.9721 -384.446782,239.3106 -2.408683,1.4581 -3.520064,1.2446 -2.857143,-0.5488 z"
             id="path3088"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#2c5aa0;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -297.68339,1486.9024 c -105.28571,-64.5087 -192.95999,-118.7882 -194.83172,-120.621 -1.92202,-1.8821 -8.85826,-45.4654 -15.93724,-100.1404 l -12.5341,-96.808 40.10899,-123.8774 c 22.05995,-68.1326 40.97197,-122.92617 42.02672,-121.76349 2.08134,2.29433 336.88164,677.62359 336.88164,679.52749 0,0.6369 -0.96429,1.116 -2.14286,1.0647 -1.17857,-0.051 -88.28571,-52.8731 -193.57143,-117.3819 z"
             id="path3090"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -269.60078,1255.4319 -168.6744,-340.28379 80.2959,-130.73233 c 44.16274,-71.90278 80.9311,-130.15524 81.70746,-129.44992 1.63252,1.48314 177.244861,938.85044 176.10395,939.99134 -0.41717,0.4172 -76.662,-152.3692 -169.43291,-339.5253 z"
             id="path3092"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#3771c8;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -87.568995,1592.2641 c -0.257427,-4.7558 171.60301,-926.88313 173.682444,-931.90337 1.784666,-4.30859 18.755231,21.7449 81.293091,124.80245 L 246.4441,915.41098 84.162335,1246.3228 C -81.334279,1583.7901 -87.3696,1595.9479 -87.568995,1592.2641 Z"
             id="path3094"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -87.534861,1555.8061 c -0.567471,-13.3951 68.558059,-1107.10303 70.637273,-1117.62685 1.962937,-9.93529 4.653266,-4.73279 51.405152,99.40617 L 83.841372,647.47556 -0.60697633,1102.3551 C -47.053568,1352.5389 -85.545133,1558.5204 -86.143791,1560.0918 c -0.598658,1.5714 -1.224639,-0.3571 -1.39107,-4.2857 z"
             id="path3096"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#5f8dd3;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -186.86482,1106.8294 -86.18366,-460.82725 50.53969,-111.20079 c 45.01476,-99.04446 50.62873,-109.98704 51.35425,-100.09803 5.20678,70.97023 71.921129,1128.60997 71.307218,1130.45167 -0.458618,1.3759 -39.616488,-204.8707 -87.017498,-458.3256 z"
             id="path3098"
             inkscape:connector-curvature="0" />
          <path
             transform="scale(0.26458333)"
             style="fill:#afc6e9;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -131.72695,992.06025 -36.77331,-577.68274 37.22778,-137.14286 37.227787,-137.14285 3.510611,12.85714 c 1.930837,7.07143 18.600491,69.21503 37.04368,138.09688 l 33.533066,125.23974 -36.437975,575.66855 c -20.040888,316.61769 -36.915054,576.14559 -37.498151,576.72869 -0.583094,0.5831 -17.608158,-258.897 -37.833488,-576.62255 z"
             id="path3100"
             inkscape:connector-curvature="0" />
        </g>
        <rect
        @click="dropInfo=true"
         v-bind:class="[dropInfo ? leafRec : '', leafy]"
        @mouseover="drop = true" @mouseleave="drop = false"
           style="cursor:pointer;fill:#0b1728;fill-opacity:1;stroke:#580000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="enlarge"
           width="22.056244"
           height="10.490488"
           x="25.577267"
           y="84.00399"
           inkscape:label="#rect3184" />
           <text
           x="85.492538"
           y="7"
           v-if="dropInfo"
           style="font-size:5px;cursor:pointer;"
            @click="dropInfo=false">X
           </text>
        <text
        v-if="!dropInfo"
        @click="dropInfo=true"
        @mouseover="drop = true" @mouseleave="drop = false"
           xml:space="preserve"
           style="cursor:pointer;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:3.96925092px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.09923127"
           x="37.805138"
           y="85.083763"
           id="text"
           inkscape:label="#text3188"
           transform="scale(0.96507527,1.0361886)"><tspan
             sodipodi:role="line"
             id="tspan3186"
             x="37.805138"
             y="85.083763"
             style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.09923127">Water</tspan><tspan
             sodipodi:role="line"
             x="37.805138"
             y="90.045326"
             style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.09923127"
             id="tspan3190">Use</tspan></text>
      </g>
    </svg>
    <div v-if="dropInfo" class="seasonStats">
      <div class="infoBox">Water Scale: {{food.water}}</div>
      <br>
      <div class="infoBox">HELLO</div>
      <br>
      <div class="infoBox">Why: {{food.waterMessage}}</div>
    </div> </div> </div>
    <div  class="column">
      <div v-bind:class="[paw && !pawInfo ? enlarge : '', images]">
    <svg
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:cc="http://creativecommons.org/ns#"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:svg="http://www.w3.org/2000/svg"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
       width="225mm"
       height="370mm"
       viewBox="0 0 210 297"
       version="1.1"
       id="svg8"
       inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
       sodipodi:docname="Carbon.svg"
       inkscape:export-filename="C:\Users\nadia\Documents\polar\polar-prints\client\src\assets\logo.png"
       inkscape:export-xdpi="96"
       inkscape:export-ydpi="96">
      <defs
         id="defs2" />
      <sodipodi:namedview
         id="base"
         pagecolor="#ffffff"
         bordercolor="#666666"
         borderopacity="1.0"
         inkscape:pageopacity="0.0"
         inkscape:pageshadow="2"
         inkscape:zoom="0.70710678"
         inkscape:cx="470.57028"
         inkscape:cy="960.40133"
         inkscape:document-units="px"
         inkscape:current-layer="layer1"
         showgrid="false"
         inkscape:object-paths="true"
         inkscape:snap-nodes="false"
         showborder="false"
         inkscape:window-width="1920"
         inkscape:window-height="1001"
         inkscape:window-x="-9"
         inkscape:window-y="-9"
         inkscape:window-maximized="1"
         inkscape:pagecheckerboard="true" />
      <metadata
         id="metadata5">
        <rdf:RDF>
          <cc:Work
             rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type
               rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g
         inkscape:label="Layer 1"
         inkscape:groupmode="layer"
         id="layer1">
        <path
           style="fill:none;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 24.739154,25.042993 -5.286786,13.199727 7.876233,11.074339 8.09202,-6.152415 -2.481553,-14.318342 -5.286786,-6.488007 z"
           id="path4710"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="M 47.360416,285.62292 Z"
           id="path4742"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="M 99.108151,71.500657 95.351333,25.143823 90.727558,53.00724 Z"
           id="path4746"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 53.721431,47.977116 -10.31875,33.072917 7.672917,20.108337 0.529166,-23.547921 z"
           id="path4748"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 14.065356,16.087435 -3.992063,15.436966 0.971043,7.271034 1.726297,2.013521 0.755255,-2.125381 z"
           id="path4750"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 69.529295,24.749119 5.286786,13.199723 -7.876233,11.074346 -8.092016,-6.152415 2.481548,-14.318341 5.286793,-6.488009 z"
           id="path4710-0"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 99.629003,70.805573 3.756807,-46.356833 4.62378,27.863416 z"
           id="path4746-0"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 145.01572,47.282032 10.31875,33.072917 -7.67292,20.108341 -0.52917,-23.547924 z"
           id="path4748-1"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 80.20309,15.793563 3.992065,15.436968 -0.971044,7.271032 -1.726292,2.013512 -0.755251,-2.125372 z"
           id="path4750-8"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="M 46.937301,9.5845415 39.847345,20.197785 c 0,0 3.300496,19.484018 3.789458,19.484018 0.488964,0 3.422738,-3.484956 3.422738,-3.484956"
           id="path4970"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 47.190809,9.8622905 7.089958,10.6132425 c 0,0 -3.300501,19.484011 -3.789461,19.484011 -0.488966,0 -3.42274,-3.484947 -3.42274,-3.484947"
           id="path4970-3"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="M 39.41846,40.656437 25.534375,87.902682 46.894505,38.563373"
           id="path4987"
           inkscape:connector-curvature="0" />
        <path
           style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="M 54.344275,40.722198 68.228356,87.968434 46.868231,38.629134"
           id="path4987-8"
           inkscape:connector-curvature="0" />
        <path
           style="fill:#216778;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 48.628217,37.782322 c -0.884585,-0.95709 -1.637936,-1.740165 -1.674112,-1.740165 -0.03618,0 -0.740377,0.711886 -1.56489,1.581969 -0.824512,0.870079 -1.549421,1.581966 -1.610907,1.581966 -0.203947,0 -1.024306,-4.090632 -2.585647,-12.893041 L 40.126364,20.30157 41.38831,18.397455 c 0.69407,-1.047263 2.188896,-3.304419 3.321837,-5.015901 1.13294,-1.711483 2.139902,-3.114868 2.237692,-3.118635 0.09779,-0.0037 1.71097,2.288984 3.584843,5.095 2.547097,3.814131 3.399567,5.206687 3.377423,5.517214 -0.04653,0.652523 -1.959977,11.331915 -2.647946,14.778805 -0.588019,2.946123 -0.817454,3.86855 -0.962216,3.86855 -0.03486,0 -0.787139,-0.783079 -1.671726,-1.740166 z"
           id="enlarge"
           inkscape:connector-curvature="0"
           inkscape:label="#path5123" />
        <g
           id="hover"
           @click="pawInfo=true"
           style="cursor:pointer"
           @mouseover="paw = true" @mouseleave="paw = false"
           inkscape:label="#g3853"
           transform="matrix(0.40778684,0,0,0.42278578,6.6130303,-20.095558)">
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path5119"
             d="m 522.80458,587.98687 c -19.05653,-14.00315 -34.80968,-26.22601 -35.00701,-27.16192 -0.19733,-0.93592 4.61632,-29.31584 10.697,-63.06651 l 11.05579,-61.36484 23.07903,-27.43209 c 12.69346,-15.08765 23.59284,-27.24823 24.22084,-27.02351 0.628,0.22472 6.25578,4.84961 12.5062,10.27753 l 11.36438,9.86894 24.17144,58.19622 24.17143,58.19622 -34.78009,47.19325 c -19.12904,25.95627 -35.24149,47.32457 -35.80543,47.48512 -0.56394,0.16052 -16.61705,-11.16526 -35.67358,-25.16841 z"
             style="fill:#0b2228;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path5121"
             d="m 157.30704,568.88464 -35.00365,-47.5143 2.25954,-5.87226 c 1.24275,-3.22975 12.03932,-29.38698 23.99237,-58.12718 l 21.73281,-52.25491 11.53887,-10.32404 c 6.34637,-5.67823 12.06593,-10.32404 12.71013,-10.32404 0.64419,0 11.41565,12.16027 23.93657,27.02282 20.39749,24.2122 22.91693,27.77917 24.22315,34.29468 3.68111,18.36169 21.41299,118.64123 21.03003,118.93167 -7.22467,5.47914 -70.68331,51.68185 -70.98417,51.68185 -0.2376,0 -16.18364,-21.38144 -35.43565,-47.51429 z"
             style="fill:#0b2228;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path5067"
             d="m 12.980365,187.51328 -6.1004393,-9.9106 4.0430623,-15.39526 c 2.223685,-8.46739 4.147888,-15.60334 4.276007,-15.85768 0.157498,-0.31265 3.028275,1.30983 8.863713,5.0095 l 8.630769,5.47192 0.24289,6.40291 c 0.133589,3.5216 0.242039,10.94917 0.240999,16.5057 l -0.0019,10.10279 -4.393549,2.33243 c -2.416451,1.28283 -5.587752,2.98864 -7.047335,3.79066 l -2.653787,1.45824 -6.100439,-9.91061 z"
             style="fill:#afdde9;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path5069"
             d="m 172.64244,192.90717 -7.00212,-3.79623 v -16.35583 -16.35583 l 8.87016,-5.62083 c 4.87859,-3.09145 8.9023,-5.58531 8.94158,-5.54191 0.0393,0.0434 1.94931,7.1938 4.24452,15.88978 l 4.1731,15.81086 -5.69257,9.25902 c -3.13091,5.09246 -5.88156,9.53986 -6.11256,9.88311 -0.3739,0.55558 -1.18854,0.20741 -7.42211,-3.17214 z"
             style="fill:#afdde9;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <g
             inkscape:label="#g1076"
             transform="translate(0,-1.0583333)"
             id="mid">
            <path
               style="fill:none;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
               d="m 14.843259,144.66875 -8.7312505,33.07291 12.7000005,20.6375 15.08125,-8.20208 -0.264584,-33.60208 z"
               id="path4706"
               inkscape:connector-curvature="0" />
            <g
               id="g171"
               transform="translate(1.0583323,2.1166671)"
               style="stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none">
              <path
                 inkscape:connector-curvature="0"
                 id="path165"
                 d="m 98.954165,236.14583 -12.170833,1.85208 -39.422916,15.875 -17.4625,-4.23333 -13.49375,-24.34167 6.35,-22.225 10.847917,-11.1125 30.95625,-34.39583 L 79.904166,144.6 98.689582,141.68958"
                 style="fill:#0088aa;fill-opacity:0.06467662;stroke:#0a0000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
              <path
                 style="fill:#0088aa;fill-opacity:0.06467662;stroke:#0a0000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                 d="m 97.345332,236.14583 12.170828,1.85208 39.42292,15.875 17.4625,-4.23333 13.49375,-24.34167 -6.35,-22.225 -10.84792,-11.1125 L 131.74116,157.56458 116.39533,144.6 97.609915,141.68958"
                 id="path167"
                 inkscape:connector-curvature="0" />
            </g>
            <path
               style="fill:#0000ff;fill-opacity:1;stroke:#0a0000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.86069647"
               d="M 98.954165,143.54166 31.220833,252.02083"
               id="path1022"
               inkscape:connector-curvature="0" />
            <path
               style="fill:#0000ff;fill-opacity:1;stroke:#0a0000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.86069647"
               d="m 98.954165,144.07083 68.527085,107.95"
               id="path1024"
               inkscape:connector-curvature="0" />
            <g
               id="g1061">
              <path
                 inkscape:connector-curvature="0"
                 id="path1028"
                 d="m 26.022468,240.06384 c -3.635095,-6.41932 -6.609263,-11.81078 -6.609263,-11.98101 0,-0.17024 1.404917,-5.11365 3.122036,-10.98537 l 3.122038,-10.67585 5.067119,-5.1133 c 2.786918,-2.81232 12.547642,-13.2104 21.6905,-23.10686 l 16.623381,-17.99355 7.611372,-6.26443 7.611372,-6.26443 8.132107,-1.23621 c 4.47266,-0.67992 8.15585,-1.2165 8.18487,-1.19241 0.0417,0.0347 -67.722741,106.2609 -67.89961,106.43818 -0.02566,0.0256 -3.020827,-5.20542 -6.655922,-11.62476 z"
                 style="fill:#00222b;fill-opacity:1;stroke:#0a0000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.86069647" />
              <path
                 inkscape:connector-curvature="0"
                 id="path1030"
                 d="m 132.16408,198.39991 c -18.48195,-29.21198 -33.562001,-53.15439 -33.511206,-53.20535 0.05074,-0.051 3.832946,0.4831 8.404776,1.1868 l 8.31244,1.27947 7.65574,6.49798 7.65575,6.49799 15.00839,16.76482 c 8.25463,9.22066 17.04927,18.87061 19.54367,21.44436 2.49439,2.57374 5.17667,5.35589 5.96061,6.18255 l 1.42537,1.50302 3.11618,10.92851 3.11618,10.9285 -6.33634,11.48318 c -3.48498,6.31575 -6.42896,11.51416 -6.54216,11.55202 -0.1132,0.0379 -15.32743,-23.83187 -33.8094,-53.04385 z"
                 style="fill:#00222b;fill-opacity:1;stroke:#0a0000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.86069647" />
              <path
                 inkscape:connector-curvature="0"
                 id="path1032"
                 d="m 40.153478,253.27253 -7.702433,-1.88532 1.330425,-2.12148 c 0.731735,-1.16681 15.605586,-24.98147 33.053007,-52.92147 17.447418,-27.94 31.804353,-50.82816 31.904299,-50.86259 0.09994,-0.0344 0.471173,0.38229 0.824947,0.92604 3.453687,5.30829 66.428647,104.65547 66.428647,104.7956 0,0.1027 -3.58777,1.05035 -7.97282,2.10588 l -7.97281,1.91915 -19.47771,-7.85951 -19.4777,-7.85951 -5.42396,-0.90225 c -2.98318,-0.49624 -5.900209,-0.90029 -6.482292,-0.89789 -0.582083,0.002 -3.499115,0.41064 -6.482292,0.90721 l -5.423958,0.90286 -19.425155,7.8474 c -10.683835,4.31607 -19.553991,7.83476 -19.711458,7.81931 -0.157467,-0.0154 -3.752398,-0.8765 -7.988737,-1.91343 z"
                 style="fill:#00222b;fill-opacity:1;stroke:#0a0000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.86069647" />
            </g>
            <text
            v-if="!pawInfo"
            @mouseover="paw = true" @mouseleave="paw = false"
               xml:space="preserve"
               style="cursor:pointer;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:14.11111069px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.26458332"
               x="102.0789"
               y="197.36259"
               id="text1051"><tspan
                 sodipodi:role="line"
                 id="tspan1049"
                 x="102.0789"
                 y="197.36259"
                 style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:14.11111069px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.26458332">Carbon</tspan><tspan
                 sodipodi:role="line"
                 x="102.0789"
                 y="215.00148"
                 style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:14.11111069px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.26458332"
                 id="tspan1053">FootPrint</tspan></text>
          </g>
        </g>
      </g>
    </svg>

      <div v-if="pawInfo">
    <div class="seasonStats">
      <div class="infoBox">Carbon rating: {{food.carbon}}</div>
      <br>
      <div class="infoBox">HELLO</div>
      <br>
      <div class="infoBox">Message: {{food.carbonMessage}}</div>
    </div>
    </div>
    </div>
    </div>
    <div class="column"><div  v-bind:class="[leaf && !leafInfo ? enlarge : '', images]">
    <svg
    class="leafsvg"
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:cc="http://creativecommons.org/ns#"
       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:svg="http://www.w3.org/2000/svg"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
       width="210mm"
       height="340mm"
       viewBox="0 0 210 297"
       version="1.1"
       id="svg3198"
       sodipodi:docname="leaf.svg"
       inkscape:version="0.92.4 (5da689c313, 2019-01-14)">
      <defs
         id="defs3192" />
      <sodipodi:namedview
         id="base"
         pagecolor="#ffffff"
         bordercolor="#666666"
         borderopacity="1.0"
         inkscape:pageopacity="0.0"
         inkscape:pageshadow="2"
         inkscape:zoom="8"
         inkscape:cx="153.79388"
         inkscape:cy="849.33652"
         inkscape:document-units="mm"
         inkscape:current-layer="layer1"
         showgrid="false"
         showborder="false"
         inkscape:window-width="1920"
         inkscape:window-height="1001"
         inkscape:window-x="-9"
         inkscape:window-y="-9"
         inkscape:window-maximized="1" />
      <metadata
         id="metadata3195">
        <rdf:RDF>
          <cc:Work
             rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type
               rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g
         inkscape:label="Layer 1"
         inkscape:groupmode="layer"
         id="layer1">
        <path
           style="fill:#aa4400;fill-opacity:1;stroke:#000000;stroke-width:1.41421354;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d=""
           id="path3774"
           inkscape:connector-curvature="0"
           transform="scale(0.26458333)" />
        <g
         @mouseover="leaf = true" @mouseleave="leaf = false"
         @click="leafInfo=true"
         style="cursor:pointer"
         class="hover"
           id="hover"
           inkscape:label="#g3872"
           transform="matrix(0.50352076,0,0,0.48371074,97.425427,-166.13309)">
          <path
             inkscape:connector-curvature="0"
             id="path3754"
             d="m -93.927082,535.91875 -4.233338,2.64583 -1.05833,-4.49792 3.70417,-39.42291 -38.89375,6.35 5.82083,-17.19792 -39.95208,-28.575 10.05417,-3.175 -7.67292,-29.36875 21.96042,4.23334 6.35,-11.90625 22.75416,22.75416 -8.99583,-47.36041 16.93333,8.99583 13.493751,-31.22083"
             style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -93.927082,535.91875 4.23333,2.64583 1.05833,-4.49792 -3.70417,-39.42291 38.89375,6.35 -5.82083,-17.19792 39.952085,-28.575 -10.054175,-3.175 7.672925,-29.36875 -21.960425,4.23334 -6.35,-11.90625 -22.75416,22.75416 8.99583,-47.36041 -16.93333,8.99583 -13.49375,-31.22083"
             id="path3756"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3768"
             d="m -144.19791,426.91042 29.10416,10.84791 -43.39166,14.2875 29.89791,31.75 13.49375,-46.0375 7.9375,-38.36458 11.641671,95.25"
             style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -43.656265,426.91042 -29.104158,10.84791 43.391661,14.2875 -29.897912,31.75 -13.493749,-46.0375 -7.9375,-38.36458 -11.641669,95.25"
             id="path3770"
             inkscape:connector-curvature="0" />
          <path
             inkscape:connector-curvature="0"
             id="path3776"
             d="m -57.05639,480.44634 c 0,-0.17471 17.036406,-18.43368 25.294518,-27.10966 l 0.868124,-0.91204 4.66592,1.42991 4.665921,1.42994 -16.531164,11.83661 c -9.092141,6.5101 -17.078401,12.22391 -17.747244,12.69733 -0.66884,0.47342 -1.216075,0.75599 -1.216075,0.62791 z"
             style="fill:#aa4400;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3778"
             d="m -148.65833,467.93306 c -9.42434,-6.75569 -17.2161,-12.36401 -17.31504,-12.46294 -0.16271,-0.16272 5.74067,-2.14434 8.1009,-2.71928 0.88118,-0.21466 1.9459,0.80627 12.17022,11.66955 14.65043,15.56605 14.89894,15.83688 14.51091,15.81471 -0.18251,-0.0103 -8.04266,-5.54633 -17.46699,-12.30204 z"
             style="fill:#aa4400;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3780"
             d="m -142.80311,467.65979 c -7.87493,-8.36742 -14.18479,-15.33908 -14.02191,-15.49257 0.37214,-0.35068 41.38208,-13.83226 41.55393,-13.66038 0.1817,0.18169 -12.78148,44.3625 -13.01713,44.36467 -0.10826,0 -6.63995,-6.8443 -14.51489,-15.21172 z"
             style="fill:#d45500;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3782"
             d="m -66.201332,460.84672 c -3.602952,-12.27238 -6.50467,-22.36444 -6.44826,-22.42677 0.196529,-0.21714 41.656317,13.58598 41.713252,13.88753 0.03154,0.16708 -6.416233,7.1773 -14.328404,15.57821 l -14.385766,15.27445 z"
             style="fill:#d45500;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3784"
             d="m -276.82134,1880.229 c -36.55743,-6.0427 -67.45575,-11.2288 -68.66296,-11.5247 -1.90802,-0.4675 0.58748,-23.3116 19.09187,-174.769 11.70773,-95.8271 21.65418,-173.7856 22.10323,-173.2411 0.44904,0.5445 6.97164,30.9443 14.49466,67.5552 13.38826,65.1542 14.23134,68.452 39.76973,155.5635 21.17405,72.2248 38.00781,126.0875 45.38364,145.2132 0.75007,1.945 0.24071,2.4444 -2.37885,2.3323 -1.83332,-0.078 -33.2439,-5.0866 -69.80132,-11.1294 z"
             style="fill:#ff7f2a;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             transform="scale(0.26458333)"
             inkscape:connector-curvature="0"
             id="path3786"
             d="m -505.21684,1890.4409 c 0,-0.5831 5.07916,-16.3339 11.28701,-35.0018 6.20785,-18.6679 22.1358,-70.8526 35.39544,-115.9661 25.05805,-85.2553 24.17239,-81.6114 47.73107,-196.3777 2.85165,-13.8918 5.36149,-24.7105 5.57741,-24.0416 0.75813,2.3487 42.86809,348.8536 42.44661,349.2751 -0.44653,0.4465 -138.85752,23.1722 -141.13064,23.1722 -0.71879,0 -1.3069,-0.477 -1.3069,-1.0601 z"
             style="fill:#ff7f2a;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3788"
             d="m -98.465088,543.48277 c -0.388364,-1.9779 -0.216146,-4.70988 1.413634,-22.4252 l 1.855875,-20.17289 -5.823451,-50.02667 -5.82345,-50.02668 6.26447,-15.19246 c 3.445458,-8.35588 6.384408,-15.32568 6.530995,-15.48844 0.146587,-0.16278 3.142308,6.71166 6.657157,15.27655 l 6.390635,15.5725 -5.821347,49.71713 -5.821346,49.7171 1.849906,20.66245 c 1.586912,17.72492 1.786662,20.92198 1.405046,22.48798 -0.244677,1.00405 -0.521269,1.90553 -0.614654,2.00331 -0.09339,0.0977 -1.027253,-0.38027 -2.075267,-1.06227 l -1.905477,-1.24001 -1.823497,1.22497 c -1.002925,0.67372 -1.912033,1.22496 -2.020242,1.22496 -0.108212,0 -0.395756,-1.01354 -0.638987,-2.25233 z"
             style="fill:#c87137;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3790"
             d="m -77.110224,417.75604 c -2.23611,-10.8227 -3.575568,-18.09723 -3.367595,-18.28927 0.189928,-0.17536 3.712921,-2.10489 7.828872,-4.28786 5.12367,-2.7174 7.518816,-3.80857 7.595389,-3.46022 0.110122,0.50096 -7.57073,41.52728 -8.081455,43.16611 -0.173561,0.55692 -1.518332,-5.23759 -3.975211,-17.12876 z"
             style="fill:#ff9955;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3792"
             d="m -118.84443,413.57089 c -2.3071,-12.16734 -4.13149,-22.18566 -4.05421,-22.26294 0.10654,-0.10655 15.48529,7.91504 15.83242,8.25823 0.0991,0.098 -7.31062,35.85424 -7.4613,36.00492 -0.0672,0.0672 -2.00982,-9.83289 -4.31691,-22.00021 z"
             style="fill:#ff9955;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3794"
             d="m -52.224183,445.09759 c -15.039252,-4.97915 -20.378282,-6.89266 -19.831399,-7.10761 0.411594,-0.16179 6.641647,-2.49971 13.844561,-5.19539 l 13.096205,-4.90124 10.851145,-2.12821 c 5.968127,-1.17049 10.884615,-2.02504 10.925524,-1.89899 0.04091,0.12607 -1.563163,6.45782 -3.564604,14.07057 -2.628697,9.99857 -3.792056,13.8598 -4.190334,13.90785 -0.303241,0.0366 -9.812234,-2.99956 -21.131098,-6.74698 z"
             style="fill:#ffb380;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3796"
             d="m -157.54858,450.94258 c -0.13944,-0.56595 -1.80147,-6.92227 -3.69341,-14.12518 -1.89195,-7.20291 -3.42277,-13.12132 -3.40184,-13.15202 0.0209,-0.0307 4.82473,0.86493 10.67511,1.99025 l 10.63705,2.04605 14.18916,5.28407 14.18915,5.28408 -20.71026,6.84181 c -11.39064,3.76298 -20.91752,6.84588 -21.17085,6.85085 -0.25332,0.005 -0.57468,-0.45397 -0.71411,-1.01991 z"
             style="fill:#ffb380;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3798"
             d="m -61.057379,427.06462 c 6.587611,-6.59077 10.553586,-10.29872 10.70579,-10.00924 0.132971,0.25286 1.450337,2.71677 2.927477,5.47528 1.477142,2.75855 2.551702,5.13964 2.387912,5.29133 -0.371697,0.34425 -25.529045,9.71166 -26.081842,9.71166 -0.22185,0 4.305449,-4.71106 10.060663,-10.46903 z"
             style="fill:#803300;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
          <path
             inkscape:connector-curvature="0"
             id="path3800"
             d="m -129.77519,432.8337 c -7.30581,-2.75027 -13.25135,-5.14474 -13.21231,-5.32109 0.0903,-0.4078 5.36734,-10.28173 5.68441,-10.63614 0.13015,-0.1455 5.03152,4.52704 10.89192,10.38341 5.8604,5.85637 10.48968,10.63138 10.28728,10.61111 -0.2024,-0.0204 -6.34548,-2.28703 -13.6513,-5.03729 z"
             style="fill:#803300;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        </g>
        <rect
        @mouseover="leaf = true" @mouseleave="leaf = false"
        @click="leafInfo=true"
         v-bind:class="[leafInfo ? leafRec : '', leafy]"
           style="fill:#2b1100;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="enlarge"
           width="28.26091"
           height="8.1447124"
           x="36.097221"
           y="63.69455"
           inkscape:label="#rect3829" />
           <text
           x="95.492538"
           y="-16"
           v-if="leafInfo"
           style="font-size:5px;cursor:pointer;"
            @click="leafInfo=false">X
           </text>
           <text
        v-if="!leafInfo"
        @mouseover="leaf = true" @mouseleave="leaf = false"
        @click="leafInfo=true"
           xml:space="preserve"
           style="cursor:pointer;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:5.22304773px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.13057619"
           x="49.492538"
           y="70.96096"
           id="text"
           inkscape:label="#text3833"
           transform="scale(1.0202716,0.98013117)"><tspan
             sodipodi:role="line"
             id="tspan3831"
             x="49.492538"
             y="70.96096"
             style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.13057619">Seasonal</tspan></text>
      </g>
    </svg>
    <div v-if="leafInfo" class="seasonStats">
      <div class="infoBox">Season of food: {{food.season}}</div>
      <br>
      <div class="infoBox">HELLO</div>
      <br>
      <div class="infoBox">Message: {{food.seasonMessage}}</div>
    </div>
    </div>
  </div>
</div>
  </div>
</div>
  </template>

<script>
import FoodService from '@/services/FoodService'
import LogService from '@/services/LogService'
export default {
  data () {
    return {
      drop: false,
      paw: false,
      leaf: false,
      userId: null,
      leafInfo: false,
      pawInfo: false,
      dropInfo: false,
      leafy: 'leafy',
      leafRec: 'leafRec',
      backClass: 'bk',
      blurClass: 'blur',
      error: null,
      name: null,
      images: 'images',
      enlarge: 'enlarge',
      food: {},
      userId: null,
      foodId: null
    }
  },
  async mounted () {
    if (this.$store.state.isUserLoggedIn) {
      this.userId = this.$store.state.user.id
    }
    this.foodId = this.$store.state.route.params.foodId
    this.food = (await FoodService.getFoodDetails(this.foodId)).data
  },
  methods: {
    async add () {
      console.log(this.userId)
      console.log(this.foodId)
        try {
          await LogService.addLog({
              userId: this.userId,
              foodId: this.foodId
            })
            this.$router.push({name: "log"})
          } catch (error) {
            console.log('hereeeee')
            console.log(error)
            this.error = error.response.error
          }
        }
    this.userId = this.$store.state.route.params.foodId
    this.food = (await FoodService.getFoodDetails(id)).data
    console.log(this.food)
  }
}
}
</script>

<style scoped>
.error {
    color:red
}

.infographic{
  position: absolute;
  margin: auto;
  display: block;
  border: solid 6px black;
  height: 600px;
  padding: 10px;
  width: auto;
}

.images {
  opacity: 1;
  position: relative;
  display: block;
  width: auto;
  height: 600px;
  transition: all 1s ease-out;
}

 .infoBox {
  background-color: white;
  width: 90%;
  opacity: 0.8;
}

.seasonStats {
 color: black;
 font-size: 20px;
 font-weight: bold;
 line-height: 1.5em;
 text-align: center;
 position: absolute;
 top: 50%;
 left: 15%;
}

.infographic .column {
  float: left;
  width: 33.3%;
  display: block;
}

.row::after {
  content: "";
  clear: both;
  display: table;
  transition: all 1s ease-out;
}

.leafy {
  cursor:pointer;
  transition: all 3s ease-out;
}

.images .leafRec {
  cursor: default;
  height: 56%;
  width: 55%;
  opacity: 0.5;
  transform: translate(-50px,-100px);
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.pawRec {
  cursor: default;
  height: 56%;
  width: 55%;
}

.enlarge {
opacity: 0.8;
transform: scale(1.1);
}

.main {
  opacity: 1;
  transition: all 1s ease-out;
}
.main2 {
opacity: 1;
position: relative;
height: 32%;
width: 32%;
}
</style>

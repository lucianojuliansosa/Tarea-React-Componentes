import React from "react";
import ArticleApp from "/src/components/ArticleApp";

const App = () => {
  return (
    <div>
      <ArticleApp 
      titulo={"Tarea React componente"}
      img={"https://http2.mlstatic.com/D_NQ_NP_2X_921820-MLA80168208479_102024-F.webp"}
      texto={"Computadora"}
      parrafo={"Soy un parrafo"}
      />
      <ArticleApp 
      titulo={"Goku"}
      img={"https://media.revistagq.com/photos/5f10224264f52a842c7f9e8b/4:3/w_960,h_720,c_limit/apps.39852.14455250034361967.824623c3-91b6-402f-9a68-c66bfac9bc20.jpg"}
      texto={"Goku"}
      parrafo={"Goku enojado"}
      />
    </div>
  );
};

export default App;

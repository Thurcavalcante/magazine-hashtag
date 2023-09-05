import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";

renderizarCatalogo();      
inicializarCarrinho();
inicializarFiltros();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
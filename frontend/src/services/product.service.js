import axios from 'axios';

const baseURL = 'http://localhost:3001';

/**
 * Faz uma requisi o GET para a rota '/products' no servidor e retorna a lista de produtos.
 * Caso ocorra um erro, lan a um erro com a mensagem 'Erro ao obter os produtos'.
 *
 * @returns {object[]} - Uma lista de objetos representando os produtos
 * @throws {Error} - Caso haja um erro ao obter os produtos
 */
const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};

export default getProducts;

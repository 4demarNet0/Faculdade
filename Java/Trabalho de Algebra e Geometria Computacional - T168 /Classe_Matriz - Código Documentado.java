package biblioteca_de_calculo_de_matriz;

public class Classe_Matriz {

	// ATRIBUTOS PRIVADOS -- VARIÁVEIS QUE AUXILIAM NA CARACTERIZAÇÃO DE UM OBJETO
	
	private int numLinhas; // ARMAZENA A QUANTIDADE DE LINHAS DE UMA MATRIZ (0 ATÉ A i-ÉSIMA)
	private int numColunas; // ARMAZENA A QUANTIDADE DE COLUNAS DE UMA MATRIZ (0 ATÉ A j-ÉSIMA)
	private double[] elementosDoArray; // ARMAZENA NUM VETOR UNIDIMENSIONAL OS VALORES QUE ESTARÃO NA MATRIZ
	
	/*
	MÉTODO CONSTRUTOR { constructor(rows, cols, elements) }
	NELE ENTRARAM OS ATRIBUTOS Linhas = numLinhas; Colunas = numColunas; Elementos = elementosDoArray; 
	*/  
	public Classe_Matriz(int numLinhas, int numColunas, double[] elementosDoArray) {
		
		// VALIDANDO SE O TAMANHO DO ARRAY CONDIZ COM O TAMANHO DA MATRIZ A SER CRIADA
		// 4 ELEMENTOS = 2 LINHAS * 2 COLUNAS (V)
		// 5 ELEMENTOS = 2 LINHAS * 3 COLUNAS (X)
		
		if (elementosDoArray.length != numLinhas * numColunas) {
			
			throw new IllegalArgumentException("Índice fora dos Limites da Matriz");
			
		}
		
		// APÓS O CONTROLE DE FLUXO ANTERIOR, SE TUDO DER CERTO, NO FIM, OS DADOS QUE ENTRAM NO CONSTRUTOR SERAM
		// ARMAZENADOS EM SEUS RESPECTIVOS ATRIBUTOS GERANDO UM OBJETO
		this.numLinhas = numLinhas;
		this.numColunas = numColunas;
		this.elementosDoArray = elementosDoArray;
		
		
	}
	
	/*
	MÉTODO get(i, j) --> ESSE MÉTODO DEVE RETORNAR PARA A PRINCIPAL O DADO ARMAZENADO EM i x j
	QUANDO SE CRIA UM MÉTODO COM VARIÁVEIS QUE NÃO ESTÃO PRESENTES NA CLASSE DEVE-SE ADICIONAR O 
	return PARA INDICAR QUE ELE DEVE RETORNAR ALGUMA COISA 
	 */
	public double get(int iLinha, int jColuna) {
		
		// VALIDANDO SE O i E j FORNECIDOS ESTÃO NOS LIMITES DA MATRIZ
		// OU SEJA, SE 0 <= i <= numLinhas E SE 0 <= j <= numColunas
		// SE NÃO SEGUE ESSES CRITÉRIOS O INDICE FORNECIDO NÃO PODE SER RETORNADO
		if (iLinha < 0 || iLinha >= this.numLinhas || jColuna < 0 || jColuna >= this.numColunas) {
			
			throw new IllegalArgumentException("Índice fora dos Limites da Matriz");
			
		}
		
		// USANDO UMA FORMULA QUE CONVERT O INDICE DE UMA MATRIZ BIDIMENSIONAL (i,j) PARA 
		// UM VETOR UNIDIMENSIONAL (i)
		// ENCONTRAMOS A POSIÇÃO DO ELEMENTO QUE ESTARIA EM i x j, SÓ QUE NO ARRAY UNIDIMENSIONAL
		int indiceDoArray = iLinha * this.numColunas + jColuna;
		// LOGO APÓS, IREMOS RETORNA O RESPECTIVO VALOR QUE ESTAMOS PROCURANDO
		// Este elementoDoArray na posição indiceDoArray
		return this.elementosDoArray[indiceDoArray];
		
	}
	
	/*
	MÉTODO set(i, j, value) --> SERVE PARA, NO RESPECTIVO ÍNDICE, SER COLOCADO UM VALOR 
	*/
	public void set(int iLinha, int jColuna, double valorASerColocado) {
		
		// VALIDANDO SE O RESPECTIVO ÍNDICE FORNECIDO EXISTE DENTRO DESSA MATRIZ
		if (iLinha < 0 || iLinha >= this.numLinhas || jColuna < 0 || jColuna >= this.numColunas) {
			
			System.out.print("Estes Índices referenciam um Endereço que não existe nessa Matriz");
			
		}
		
		// CALCULAMOS A POSIÇÃO DESSE ELEMENTO NO VETOR UNIDIMENSIONAL
		int indiceDoArray = iLinha * this.numColunas + jColuna;
		// ARMAZENAMOS O VALOR QUE FORNECEMOS AQUI DENTRO DESSA POSIÇÃO NO VETOR UNIDIMENSIONAL
		// OU SEJA, "NO VETOR elementosDoArray NA POSIÇÃO indiceDoArray COLOCUE O VALOR valorASerColocado"
		this.elementosDoArray[indiceDoArray] = valorASerColocado;
		
	}
	
	// ESSE GET SERVE PARA MOSTRAR O NÚMERO DE COLUNAS DAQUELE RESPECTIVO OBJETO
	public int getLinhas() {
		
		return this.numLinhas;
		
	}
	
	public int getCols() {
		
		return this.numColunas;
		
	}
	
	
}

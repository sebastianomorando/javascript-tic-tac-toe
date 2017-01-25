/* albero per algoritmo MINIMAX applicato al TRIS(tic-tac-toe) */





function node() {                         /* nodo: oggetto essenziale di cui sono costituiti gli alberi */
        this.parent = null;               /* parent: il padre */
        this.sons = new Array();          /* sons: l'array dei figli */
        this.campo = new Array();         /* campo: il valore contenuto nel nodo */
        this.campo[0] = new Array();      /* in questo caso è il campo di una partita a tris */
        this.campo[1] = new Array();
        this.campo[2] = new Array();
        this.mossa = 0;
        this.partita = 'IC';
        this.punteggio = 0;               /* punteggio (euristica) che mi permetterà di trovare i nodi convenienti */
        this.x = 0;                       /* coordinate che mi consentono di trovare la mossa associata al nodo */
        this.y = 0;
      }
      
      
function duplicaCampo(campo1, campo2) {
  for (var i = 0; i < 3; i++)
    for (var j = 0; j < 3; j++)
      campo1[i][j] = campo2[i][j];

}
      
      
/* Primo passo: creare l'albero di tutte le mosse possibili data una situazione di gioco */

function addNode(node) {  /* Funzione ricorsiva che aggiunge i nodi all'albero */

        if ((node.mossa < 10) && (node.partita == 'IC') ) { /* ATTENZIONE: Se si vuole visualizzare immettere un valore minore di 7  */
          for (var x = 0; x < 3; x++) 
            for (var y = 0; y < 3; y++) 
                  if (node.campo[x][y] == 'V') {
                            
                            
                            n = node.sons.push(new window.node()); /* Aggiungo un figlio */
                            node.sons[n-1].parent = node;
                            duplicaCampo(node.sons[n-1].campo,node.campo);  /* Copio il valore del padre sul figlio */
                            //inizializza(node.sons[n-1].campo);
                            node.sons[n-1].campo[x][y] = ((node.mossa % 2)!= 0)?'X':'O'; /* se i è dispari tocca a X, altrimenti a Y */
                            node.sons[n-1].x = x;
                            node.sons[n-1].y = y;
                            //alert(node.campo+"\n"+node.mossa);
                            node.sons[n-1].mossa = node.mossa + 1;
                            node.sons[n-1].partita = controllo(node.sons[n-1].campo, node.sons[n-1].mossa);
                            //alert(controllo(node.sons[n-1].campo, node.sons[n-1].mossa));
                            };
                        
                        
           for (var i = 0; i < node.sons.length; i++) 
                            addNode(node.sons[i]);
              
           
           
        
        }


}

/* Secondo passo: assegno un punteggio o euristica per ognuna delle partite calcolate */

function assegnaPunteggio (node) { /* cpu indica se la cpu controlla X o O, se controlla X allora inserire 'VX' altrimenti 'VO' */
    
    for (var i = 0; i < node.sons.length; i++)
            assegnaPunteggio (node.sons[i]);
        
        var p = 0;
        temp = node;
        while (temp.parent != null) {
          p++;
          temp = temp.parent;
        }
        var pmax = 9 - mossa;
        
        switch (node.partita) {
        
          case 'VX':
          if (mossa < 8) node.punteggio = 1*(node.mossa - 10) ; else node.punteggio = -1;
          break;
          case 'VO':
          if (mossa < 8) node.punteggio = -1*(node.mossa - 10) ; else node.punteggio = 1;
          break;
          case 'PA':
          //node.punteggio--;
          break;
          case 'IC' :
          for (var j = 0; j < node.sons.length; j++)
              node.punteggio += node.sons[j].punteggio;
          break; 
        
        }
        //alert (node.campo[0]+"\n"+node.campo[1]+"\n"+node.campo[2]+"\n"+node.partita+"\n"+node.punteggio);

}

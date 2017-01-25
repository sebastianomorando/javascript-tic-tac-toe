/* strutture dati e gestione di una partita di tris */




 var campo = new Array();      /* Creazione del campo di gioco */
      campo[0] = new Array();   /* come matrice 3x3             */
      campo[1] = new Array();   /* 'V' per le celle vuote       */
      campo[2] = new Array();   /* 'O' e 'X' per i giocatori    */
      
      var partita = 'IC';
      /* La variabile partita contiene lo stato della partita e può avere 4 valori:
         'IC' = partita in corso
         'VX' = la partita è finita e vince il giocatore 1 
         'VO' = la partita è finita e vince il giocatore 2
         'PA' = la partita è finita ed è pari
      */
      
      var mossa = 1; /* numero mosse */
      
      
      function inizializza(campo) {
        for (var i = 0; i < 3; i++)   /* Assegno il simbolo 'V' */
          for (var j = 0; j < 3; j++) /* a tutte le celle vuote */
            campo[i][j] = 'V';
        //partita = 'IC';
      }
      
      

/* Controlla la situazione della partita nella matrice 'campo' alla mossa 'mossa' */
function controllo(campo, mossa) {
        
      
        var QX = 0; /* Conta il num di X allineate */
        var QO = 0; /* Conta il num di O allineate */
        
        for (var i = 0; i < 3; i++) {         /* Controllo allineamenti verticali */
          QX = 0;
          QO = 0;
          for (var j = 0; j < 3; j++) {
            if ( campo[i][j] == 'X' ) QX++;
            if ( campo[i][j] == 'O' ) QO++;
          }
          
          if (QX == 3) return 'VX';
          if (QO == 3) return 'VO';
        }
        
        
        
        for (var j = 0; j < 3; j++) {         /* Controllo allineamenti orizzontali */
          QX = 0;
          QO = 0;
          for (var i = 0; i < 3; i++) {
            if ( campo[i][j] == 'X' ) QX++;
            if ( campo[i][j] == 'O' ) QO++;
          }
          if (QX == 3) return 'VX';
          if (QO == 3) return 'VO';
        }
        
        
        
       QX = 0;          /* Controllo allineamenti obliqui da alto sx a basso dx */
       QO = 0;
       var j = 0;
       for (var i = 0; i < 3; i++) {
          if ( campo[i][j] == 'X' ) QX++;
          if ( campo[i][j] == 'O' ) QO++;
          j++;
        }          
       
        if (QX == 3) return 'VX';
        if (QO == 3) return 'VO';
        
       QX = 0;          /* Controllo allineamenti obliqui da basso sx a alto dx */
       QO = 0;
       var j = 0;
       for (var i = 2; i >= 0 ; i--) {
          if ( campo[i][j] == 'X' ) QX++;
          if ( campo[i][j] == 'O' ) QO++;
          j++;
        }          
       
        if (QX == 3) return 'VX';
        if (QO == 3) return 'VO';
        
        if (mossa == 10) return 'PA';
        
        return 'IC';

      }

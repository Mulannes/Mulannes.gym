class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` 
      <style>
      .header{
        display: flex;
        background-color: var(--gray);
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 20px;
        z-index: 99px;
    }
    
    .header h1{
        margin-right: 5%;
        font-size: 1.3em;
        font-weight: 600;
        color: var(--orange);
    }
    
    .navigation{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .navigation a{
        position: relative;
        font-size: 1em;
        margin-right: 66px;
        text-decoration: none;
        color: #fff;
    }
    
    .navigation a::after{
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -6px;
        height: 3px;
        background: var(--orange);
        transform: scale(0);
    }
    
    .navigation a:hover::after{
        transform: scaleX(1);
    }
    
    .btn-contact{
        position: relative;
        left: 3%;
        color: #000;
        margin-right: 66px;
        background-color: var(--orange);
        width: 160px;
        height: 60px;
        border-radius: 10px;
        font-weight: 600;
        font-family: "poppins";
    }
    
    .btn-contact:hover{
        background-color: transparent;
        color: var(--orange);
        border: 2px solid var(--orange);
        transform: scale(1.05);
      </style> 

      <header class="header">
        <h1>Mulannes.Gym</h1>
        <nav class="navigation">
            <a href="#">Home</a>
            <a href="#">Planos</a>
            <a href="#">Modalidades</a>
            <a href="#">Horários</a>
            <a href="#">Contato</a>
            <button class="btn-contact">Fale Conosco</button>
        </nav>
  </header>
      `;
    }
    }
    
    customElements.define("navbar-1", Header);
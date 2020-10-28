
export default function etapa1() {
    return(
        <div>
            <h3><strong>ETAPA 1 - DADOS GERAIS</strong></h3>

            <form>
                <div>
                    <label for="nome">Qual o seu nome?</label> <br/>
                    <input type="text" id="nome"/>
                </div>
                <div>
                    <label for="idade">Qual sua idade?</label> <br/>
                    <input type="text" id="idade"/>
                </div>
                <div>
                    <label for="email">Qual o seu e-mail?</label> <br/>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label for="nome">Qual sua escolaridade?</label> <br/>
                    <select> 
                        <option value="" key="">Ensino médio incompleto</option>
                        <option value="" key="">Ensino médio completo</option>
                        <option value="" key="">Ensino superior incompleto</option>
                        <option value="" key="">Ensino superior completo</option>
                    </select>
                </div>
              
            </form>
        </div>
    )
}
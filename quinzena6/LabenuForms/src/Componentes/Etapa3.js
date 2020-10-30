
export default function etapa3() {
    return (
        <div>
        <h3><strong>ETAPA 3 - INFORMAÇÕES SOBRE QUEM NÃO SE FORMOU OU NÃO CURSOU O ENSINO SUPERIOR</strong></h3>

        <form>
            <div>
                <label for="nome">Por que você não iniciou ou não concluiu um curso de graduação?</label> <br/>
                <input type="text" id="nome"/>
            </div>
            <div>
                <label for="nome">Você cursa ou já cursou algum curso complementar?</label> <br/>
                <select>
                    <option value="" key="">Curso técnico</option>
                    <option value="" key="">Curso de línguas</option>
                    <option value="" key="">Não fiz curso complementar</option>
                </select>
            </div>
        </form>
    </div>
    )
}
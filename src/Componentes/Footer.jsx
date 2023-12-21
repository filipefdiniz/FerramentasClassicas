import './Footer.css';
import { useState } from 'react';

export const FooterComponent = () => {

    const [isTermsVisible, setTermsVisible] = useState(false);
    const [isTermsVisible2, setTermsVisible2] = useState(false);

    function toggleTermsVisibility() {
        setTermsVisible(!isTermsVisible);
    }
    function toggleTermsVisibility2() {
        setTermsVisible2(!isTermsVisible2);
    }
    return (
        <div className="footer" id='footer'>
            <div className="footer1">
                <h4 onClick={toggleTermsVisibility}>Termos e condições</h4>
                <h4 onClick={toggleTermsVisibility2}>Política de privacidade</h4>
            </div>
            <div className="footer2">
                <h4>Belo Horizonte - MG</h4>
            </div>
            <div className="rodape">
                <p>@ferramentasclassicas - todos os direitos reservados</p>
            </div>
            {isTermsVisible && (
                <div className="overlay">
                    <div className="modal">
                        <button onClick={toggleTermsVisibility}>Fechar</button>
                        <h2><span style={{ color: 'rgb(68, 68, 68)' }}>1. Termos</span></h2><p><span style={{ color: 'rgb(68, 68, 68)' }}>Ao acessar ao site <a href="http://ferramentasclassicas.com.br/">Ferramentas Clássicas</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</span></p><h2><span style={{ color: 'rgb(68, 68, 68);' }}>2. Uso de Licença</span></h2><p><span style={{ color: 'rgb(68, 68, 68);' }}>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Ferramentas Clássicas , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:&nbsp;</span></p><ol><li><span style={{ color: 'rgb(68, 68, 68)' }}>modificar ou copiar os materiais;&nbsp;</span></li><li><span style={{ color: 'rgb(68, 68, 68);' }}>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);&nbsp;</span></li><li><span style={{ color: 'rgb(68, 68, 68);' }}>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Ferramentas Clássicas;&nbsp;</span></li><li><span style={{ color: 'rgb(68, 68, 68);' }}>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou&nbsp;</span></li><li><span style={{ color: 'rgb(68, 68, 68);' }}>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</span></li></ol><p><span style={{ color: 'rgb(68, 68, 68);' }}>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Ferramentas Clássicas a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</span></p><h2><span style={{ color: 'rgb(68, 68, 68);' }}>3. Isenção de responsabilidade</span></h2><ol><li><span style={{ color: 'rgb(68, 68, 68);' }}>Os materiais no site da Ferramentas Clássicas são fornecidos 'como estão'. Ferramentas Clássicas não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</span></li><li><span style={{ color: 'rgb(68, 68, 68);' }}>Além disso, o Ferramentas Clássicas não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</span></li></ol><h2><span style={{ color: 'rgb(68, 68, 68);' }}>4. Limitações</span></h2><p><span style={{ color: 'rgb(68, 68, 68);' }}>Em nenhum caso o Ferramentas Clássicas ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Ferramentas Clássicas, mesmo que Ferramentas Clássicas ou um representante autorizado da Ferramentas Clássicas tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</span></p><h2><span style={{ color: 'rgb(68, 68, 68);' }}>5. Precisão dos materiais</span></h2><p><span style={{ color: 'rgb(68, 68, 68);' }}>Os materiais exibidos no site da Ferramentas Clássicas podem incluir erros técnicos, tipográficos ou fotográficos. Ferramentas Clássicas não garante que qualquer material em seu site seja preciso, completo ou atual. Ferramentas Clássicas pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Ferramentas Clássicas não se compromete a atualizar os materiais.</span></p><h2><span style={{ color: 'rgb(68, 68, 68);' }}>6. Links</span></h2><p><span style={{ color: 'rgb(68, 68, 68);' }}>O Ferramentas Clássicas não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Ferramentas Clássicas do site. O uso de qualquer site vinculado é por conta e risco do usuário.</span></p><p><br /></p><h3><span style={{ color: 'rgb(68, 68, 68);' }}>Modificações</span></h3><p><span style={{ color: 'rgb(68, 68, 68);' }}>O Ferramentas Clássicas pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</span></p><h3><span style={{ color: 'rgb(68, 68, 68);' }}>Lei aplicável</span></h3><p><span style={{ color: 'rgb(68, 68, 68);' }}>Estes termos e condições são regidos e interpretados de acordo com as leis do Ferramentas Clássicas e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</span></p>
                    </div>
                </div>
            )}
            {isTermsVisible2 && (
                <div className="overlay">
                    <div className="modal">
                        <button onClick={toggleTermsVisibility2}>Fechar</button>
                        <div>
                            <h2 style={{ color: 'rgb(68, 68, 68)' }}>Política Privacidade</h2>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                A sua privacidade é importante para nós. É política do Ferramentas Clássicas respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site{' '}
                                <a href="http://ferramentasclassicas.com.br/">Ferramentas Clássicas</a>, e outros sites que possuímos e operamos.
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas{' '}
                                <a href="https://politicaprivacidade.com/" rel="noopener noreferrer" target="_blank" style={{ backgroundColor: 'transparent', color: 'rgb(68, 68, 68)' }}>
                                    políticas de privacidade
                                </a>
                                .
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                <ul>
                                    <li>
                                        <span style={{ color: 'rgb(68, 68, 68)' }}>
                                            O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ color: 'rgb(68, 68, 68)' }}>
                                            Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ color: 'rgb(68, 68, 68)' }}>
                                            Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
                                        </span>
                                    </li>
                                    <li>
                                        <span style={{ color: 'rgb(68, 68, 68)' }}>
                                            Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
                                        </span>
                                    </li>
                                </ul>
                            </p>
                            <h3 style={{ color: 'rgb(68, 68, 68)' }}>Compromisso do Usuário</h3>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Ferramentas Clássicas oferece no site e com caráter enunciativo, mas não limitativo:
                            </p>
                            <ul>
                                <li>
                                    <span style={{ color: 'rgb(68, 68, 68)' }}>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</span>
                                </li>
                                <li>
                                    <span style={{ color: 'rgb(68, 68, 68)' }}>
                                        B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,{' '}
                                        <a href="https://kiwibet.br.com" style={{ color: 'inherit !important', textDecoration: 'none !important', fontSize: 'inherit !important' }}>
                                            kiwibet
                                        </a>
                                        ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                                    </span>
                                </li>
                                <li>
                                    <span style={{ color: 'rgb(68, 68, 68)' }}>
                                        C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Ferramentas Clássicas, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                                    </span>
                                </li>
                            </ul>
                            <h3 style={{ color: 'rgb(68, 68, 68)' }}>Mais informações</h3>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>
                                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                            </p>
                            <p style={{ color: 'rgb(68, 68, 68)' }}>Esta política é efetiva a partir de 20 December 2023 19:47</p>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );

}
export default FooterComponent;
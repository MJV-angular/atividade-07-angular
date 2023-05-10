import { Injectable } from '@angular/core';
import { DataHome } from 'src/app/shared/interfaces/home.interfaces';
@Injectable({
  providedIn: 'root'
})

export class DataHomeService {
  data: DataHome = {
    schools: ['Java', 'RPA' , 'QA', 'Salesforce', 'Node', 'Product Owner', 'Dynamics', 'UX/UI', 'RPA DEV', 'REACT', 'Services Design', 'Data Science', 'Design Thinking', 'Motion', 'Angular', 'Agile'],
    homeText:[
      {
        title:'MjvScholl',
        subtitle:'Mergulhe no universo da tecnologia, inovação e agilidade.',
        paragraph: 'Atualize-se no mercado de trabalho, descubra uma nova experiência, potencialize suas competências e experimente praticar o que gosta através das nossas Schools.',
        img:""
      },
      {
        title: '',
        subtitle: '',
        paragraph:'MJV Academy é o Programa de Desenvolvimento construído e gerido colaborativamente, que promove a troca de conhecimentos, potencializa nossa cultura organizacional para dentro e para fora da MJV e apoia o desenvolvimento dos colaboradores e da companhia.A Academy contempla ações como Treinamentos, Cursos e Eventos que visam a capacitação em diversos temas, ferramentas e modelos de negocios',
        img:""
      },
      {
        title: '',
        subtitle: '',
        paragraph:'A MJV já realizou mais de 60 schools e capacitou mais de 2000 alunos',
        img:"/assets/icon1.png"
      },
      {
        title: '',
        subtitle: '',
        paragraph:'Cursos 100% gratuitos e online, focados em tecnologia, inovação, agilidade e sustentabilidade.',
        img:"/assets/icon2.png"
      },
      {
        title: '',
        subtitle: '',
        paragraph:'São mais de 25 anos atuando com inovação e tecnologia.'
        ,
        img:"/assets/icon3.png"
      },

      {
        title: '',
        subtitle: '',
        paragraph:'Acreditamos que o primeiro passo para transformar o mercado consiste em sensibilizar os profissionais por meio de metodologias ágeis. Pensando nisso, destinamos as nossas Schools aos profissionais em transição ou início de carreira que estão em busca de aprimorar seus conhecimentos e ingressar no mercado de trabalho em áreas diversas voltadas para o meio da tecnologia, design, inovação, agilidade e sustentabilidade, oferecendo cursos de curta duração 100% gratuitos e remotos. Com o compromisso social, impactamos a sociedade positivamente na valorização da diversidade, contando com o apoio de organizações, comunidades e instituições na disseminação de conhecimento ao público diverso.'
        ,
        img:"/assets/picture.jpg"
      },
    ]
   }

  constructor() { }

  getData(): DataHome {
    return this.data
  }
}

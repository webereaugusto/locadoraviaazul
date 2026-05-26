import { 
    CheckCircle2, 
    ShieldCheck, 
    Wrench, 
    Clock,
    Banknote,
    Car
  } from './components/Icons';
  import { Feature, CarPlan, Testimonial, FaqItem } from './types';
  
export const WHATSAPP_LINK = "https://wa.me/5519998945035?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20decidi%20ser%20meu%20pr%C3%B3prio%20patr%C3%A3o.%20Quero%20alugar%20um%20carro.";
  
  export const FEATURES: Feature[] = [
    {
      title: "Aprovação Facilitada",
      description: "Esqueça a burocracia dos grandes bancos. Aqui nós queremos ver você rodando e faturando.",
      icon: CheckCircle2
    },
    {
      title: "Manutenção Inclusa",
      description: "Pneus, óleo e revisões preventivas por nossa conta. Você só se preocupa em dirigir.",
      icon: Wrench
    },
    {
      title: "Seguro App Incluso",
      description: "Proteção total para você e para o veículo enquanto trabalha nos aplicativos.",
      icon: ShieldCheck
    },
    {
      title: "Entrega Rápida",
      description: "Saia com o carro no mesmo dia após a aprovação do cadastro.",
      icon: Clock
    },
    {
      title: "Sem Análise Rígida",
      description: "Não exigimos score alto. Analisamos seu perfil de motorista, não apenas seu crédito.",
      icon: Banknote
    },
    {
      title: "Carros Econômicos",
      description: "Frota focada em veículos 1.0 e 1.4 com alta eficiência de combustível.",
      icon: Car
    }
  ];
  
  export const PLANS: CarPlan[] = [
    {
      name: "Polo",
      category: "Volkswagen Polo",
      image: "/images/polo.jpg",
      price: "",
      features: [
        "Ar-condicionado",
        "Direção Hidráulica",
        "Manutenção Inclusa",
        "Seguro para App",
        "Econômico e confiável"
      ]
    },
    {
      name: "Argo",
      category: "Fiat Argo",
      image: "/images/Fiat-Argo-Drive-1-0-manual-5-jpg.webp",
      price: "",
      features: [
        "Ar-condicionado",
        "Multimídia",
        "Manutenção Inclusa",
        "Seguro para App",
        "Econômico e confiável"
      ]
    },
    {
      name: "Sprinter",
      category: "Van Sprinter",
      image: "/images/sprinter.webp",
      price: "",
      features: [
        "Capacidade Ampliada",
        "Ideal para Viagens",
        "Manutenção Inclusa",
        "Seguro Total",
        "Conforto para Passageiros"
      ]
    },
    {
      name: "Fastback",
      category: "Fiat Fastback",
      image: "/images/Novo-Fiat-Fastback-Impetus-T200-Hybrid-2026-3.webp",
      price: "",
      uberBlack: true,
      features: [
        "SUV Compacto",
        "Design Moderno",
        "Manutenção Inclusa",
        "Seguro Total",
        "Ideal para Uber Black"
      ]
    },
    {
      name: "Cronos",
      category: "Fiat Cronos",
      image: "/images/cronos.webp",
      price: "",
      uberBlack: true,
      features: [
        "Sedan Confortável",
        "Câmbio Automático",
        "Manutenção Inclusa",
        "Seguro Total",
        "Ideal para Uber Black"
      ]
    }
  ];
  
  export const TESTIMONIALS: Testimonial[] = [
    {
      name: "Carlos Mendes",
      role: "Motorista Uber Black",
      location: "Campinas - Centro",
      text: "A ViaSuL salvou minha renda. Meu carro quebrou e em 24h eu já estava rodando com um carro deles. O atendimento é nota 10."
    },
    {
      name: "Fernanda Souza",
      role: "Motorista 99Pop",
      location: "Campinas - Barão Geraldo",
      text: "Alugo há 6 meses. O melhor é não ter dor de cabeça com oficina. Deu problema, eles trocam o carro ou arrumam rápido."
    },
    {
      name: "Roberto Lima",
      role: "Motorista Indrive",
      location: "Sumaré/Campinas",
      text: "A aprovação foi muito tranquila. Em outras locadoras me barraram por score baixo, na ViaSuL confiaram no meu trabalho."
    }
  ];
  
  export const FAQS: FaqItem[] = [
    {
      question: "Preciso de cartão de crédito?",
      answer: "Não exigimos cartão de crédito obrigatório. Aceitamos caução via PIX, boleto ou cartão, facilitando para quem quer alugar carro para aplicativo em Campinas."
    },
    {
      question: "Qual o valor do caução?",
      answer: "O valor do caução varia conforme o veículo, a data e o perfil do contrato. Nossa equipe informa as condições atualizadas no WhatsApp antes da aprovação."
    },
    {
      question: "Posso usar para Uber e 99?",
      answer: "Sim! Todos os nossos veículos são cadastrados e aceitos nas principais plataformas (Uber, 99, InDrive)."
    },
    {
      question: "Preciso ter EAR na CNH?",
      answer: "Sim. Para trabalhar com aplicativos e alugar conosco, sua CNH deve conter a observação 'Exerce Atividade Remunerada' (EAR), conforme exigência legal."
    },
    {
      question: "Quanto tempo demora a aprovação?",
      answer: "Nossa análise é expressa. Normalmente, o retorno acontece entre 24 e 48 horas para locação em Campinas e região."
    },
    {
      question: "Como funciona o pagamento do aluguel?",
      answer: "Trabalhamos no modelo pré-pago semanal (Pay & Drive). Você paga a semana para rodar."
    },
    {
      question: "O que está incluso no valor semanal?",
      answer: "Tudo! Manutenção preventiva, seguro específico para aplicativos, licenciamento e IPVA."
    },
    {
      question: "E se o carro quebrar na rua?",
      answer: "O seguro tem assistência 24 horas com guincho. Estamos sempre prontos para te ajudar quando precisar."
    },
    {
      question: "Há limite de quilometragem?",
      answer: "O limite de quilometragem varia de acordo com o plano e contrato assinado. O Km excedente tem um valor fixo baixo."
    },
    {
      question: "Onde retiro o carro em Campinas?",
      answer: "A retirada é feita em Campinas, na Avenida Engenheiro Antônio Francisco de Paula Souza, 1333. Após a aprovação, agendamos o melhor horário para você buscar o veículo."
    },
    {
      question: "Vocês atendem motoristas da RMC?",
      answer: "Sim. Atendemos motoristas de Campinas e de toda a Região Metropolitana, incluindo Sumaré, Hortolândia, Paulínia, Valinhos e Indaiatuba."
    },
    {
      question: "Posso fazer corridas para Viracopos, Guarulhos e Congonhas?",
      answer: "Sim. Nossos veículos podem ser usados em corridas urbanas, viagens intermunicipais e translados para aeroportos, conforme as condições do contrato."
    },
    {
      question: "Quais documentos preciso para alugar um carro para app?",
      answer: "Normalmente solicitamos CNH com EAR, documento pessoal e comprovante de residência. Nossa equipe orienta todo o envio pelo WhatsApp."
    },
    {
      question: "O aluguel inclui seguro para aplicativo?",
      answer: "Sim. Os planos incluem seguro para app, manutenção preventiva, licenciamento e IPVA, para você rodar com mais tranquilidade."
    },
    {
      question: "Em quanto tempo consigo começar a rodar?",
      answer: "Depois da aprovação do cadastro e da assinatura do contrato, você pode agendar a retirada em Campinas e começar a trabalhar rapidamente."
    }
  ];
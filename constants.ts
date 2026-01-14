import { 
    CheckCircle2, 
    ShieldCheck, 
    Wrench, 
    Clock,
    Banknote,
    Car
  } from './components/Icons';
  import { Feature, CarPlan, Testimonial, FaqItem } from './types';
  
  export const WHATSAPP_LINK = "https://wa.me/5519981940463?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20decidi%20ser%20meu%20pr%C3%B3prio%20patr%C3%A3o.%20Quero%20alugar%20um%20carro.";
  
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
      image: "https://img.olx.com.br/thumbs700x500/82/827535939142276.webp",
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
      image: "https://www.automaistv.com.br/wp-content/uploads/2024/10/Fiat-Argo-Drive-1.0-manual-5-jpg.webp",
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
      image: "https://production.autoforce.com/uploads/picture/image/251344548/main_webp_comprar-sprinter-van-passageiro_dc348a69d3.png.webp",
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
      image: "https://www.autossegredos.com.br/wp-content/uploads/2025/06/Novo-Fiat-Fastback-Impetus-T200-Hybrid-2026-3.webp",
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
      image: "https://www.automaistv.com.br/wp-content/uploads/2025/07/fiat-cronos-drive-1.3-at-2026-1320x743.webp",
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
      answer: "Não exigimos cartão de crédito obrigatório. Aceitamos caução via PIX ou boleto, facilitando para quem está começando."
    },
    {
      question: "Qual o valor do caução?",
      answer: "O caução pode ser pago em até 3x no cartão de crédito. Temos taxas muito atrativas. O valor depende da data e do veículo escolhido. Ligue para saber mais detalhes."
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
      answer: "Nossa análise é expressa. Normalmente, é entre 24 e 48 horas para darmos o retorno sobre o seu cadastro."
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
      answer: "O limite é de 8.000km por mês. O Km excedente tem um valor fixo baixo."
    }
  ];
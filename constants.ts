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
      name: "Econômico",
      category: "Hatch 1.0 (Gol)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Volkswagen_Gol_Highline_2023_%2853708009248%29_%28cropped%29.jpg/1200px-Volkswagen_Gol_Highline_2023_%2853708009248%29_%28cropped%29.jpg", // VW Gol
      price: "499",
      features: [
        "Ar-condicionado",
        "Direção Hidráulica",
        "Manutenção Inclusa",
        "Seguro para App",
        "1.500 km/semana"
      ]
    },
    {
      name: "Conforto",
      category: "Sedan 1.6 (Voyage)",
      image: "https://blogger.googleusercontent.com/img/a/AVvXsEilnKHtWYBS3IyEdyB6LRZmd2KNaipgJ_3KKLxi0j_5MwEBlp7nSn7QAv58alAcm08y6DkzRAs1Yfs9nhtQrvIcxWAHFxGS-ZnKZy4nA2WH-xBfRnfEErSiPKwARDCsT0OvGtgI58azv91T9BtRIRmLDaw7n46he85LdglQdI2k4zBXZ4-g4AI4gTSz=w1200-h630-p-k-no-nu", // VW Voyage
      price: "589",
      popular: true,
      features: [
        "Porta-malas amplo",
        "Multimídia",
        "Maior preferência no VIP",
        "Manutenção Inclusa",
        "1.750 km/semana"
      ]
    },
    {
      name: "Premium",
      category: "Hatch Premium (Golf)",
      image: "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/08/19162026/WhatsApp-Image-2024-08-19-at-14.11.43.jpeg", // VW Polo/Golf Style
      price: "749",
      features: [
        "Câmbio Automático",
        "Motor Potente",
        "Ideal para Black/Comfort",
        "Seguro Total",
        "Km Livre"
      ]
    }
  ];
  
  export const TESTIMONIALS: Testimonial[] = [
    {
      name: "Carlos Mendes",
      role: "Motorista Uber Black",
      location: "Campinas - Centro",
      text: "A Via Azul salvou minha renda. Meu carro quebrou e em 24h eu já estava rodando com um carro deles. O atendimento é nota 10."
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
      text: "A aprovação foi muito tranquila. Em outras locadoras me barraram por score baixo, na Via Azul confiaram no meu trabalho."
    }
  ];
  
  export const FAQS: FaqItem[] = [
    {
      question: "Preciso de cartão de crédito?",
      answer: "Não exigimos cartão de crédito obrigatório. Aceitamos caução via PIX ou boleto, facilitando para quem está começando."
    },
    {
      question: "Qual o valor do caução?",
      answer: "O valor do caução varia conforme a categoria do veículo, começando a partir de R$ 800,00, que pode ser parcelado. Entre em contato para detalhes."
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
      answer: "Nossa análise é expressa. Normalmente, em até 4 horas úteis damos o retorno sobre o seu cadastro."
    },
    {
      question: "Como funciona o pagamento do aluguel?",
      answer: "Trabalhamos no modelo pré-pago semanal (Pay & Drive). Você paga a semana para rodar. Aceitamos PIX e Boleto Bancário."
    },
    {
      question: "O que está incluso no valor semanal?",
      answer: "Tudo! Manutenção preventiva e corretiva (desgaste natural), seguro específico para aplicativos, licenciamento e IPVA."
    },
    {
      question: "E se o carro quebrar na rua?",
      answer: "Temos assistência 24 horas com guincho. Se o problema for mecânico e demorar para arrumar, disponibilizamos um carro reserva conforme disponibilidade."
    },
    {
      question: "Há limite de quilometragem?",
      answer: "Depende do plano escolhido. Temos opções de 1.500km, 1.750km semanais e também planos com Km Livre. O Km excedente tem um valor fixo baixo."
    }
  ];
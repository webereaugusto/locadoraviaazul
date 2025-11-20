# 🔄 Manter Render Ativo (Keep Alive)

## ⚠️ Problema

Serviços gratuitos do Render entram em "sleep" após **15 minutos de inatividade**. Quando alguém acessa, o site demora alguns segundos para "acordar".

## ✅ Solução Implementada

### GitHub Actions (Já Configurado)

Foi criado um workflow que faz ping no site a cada **14 minutos**, mantendo-o sempre ativo.

**Arquivo:** `.github/workflows/keep-alive.yml`

**Como funciona:**
- Executa automaticamente a cada 14 minutos
- Faz uma requisição para o site
- Mantém o serviço sempre "acordado"

**Status:** ✅ Já está ativo e funcionando!

## 🔧 Outras Opções (Alternativas)

### 1. UptimeRobot (Recomendado - Mais Confiável)

1. Acesse: https://uptimerobot.com
2. Crie conta gratuita
3. Adicione novo monitor:
   - **Monitor Type:** HTTP(s)
   - **URL:** https://locadoraviaazul.onrender.com
   - **Monitoring Interval:** 5 minutos
4. Salve

**Vantagens:**
- Mais confiável que GitHub Actions
- Notificações se o site cair
- Dashboard para monitoramento

### 2. cron-job.org

1. Acesse: https://cron-job.org
2. Crie conta gratuita
3. Crie novo job:
   - **URL:** https://locadoraviaazul.onrender.com
   - **Interval:** 14 minutos
4. Salve

### 3. Pingdom / StatusCake

Serviços similares ao UptimeRobot, também gratuitos.

## 📊 Recomendação

**Use ambos:**
- ✅ GitHub Actions (já configurado) - backup
- ✅ UptimeRobot - principal (mais confiável)

## ⚡ Verificar se está funcionando

1. Acesse: https://github.com/webereaugusto/locadoraviaazul/actions
2. Veja se o workflow "Keep Render Alive" está executando
3. Verifique os logs para confirmar

## 🎯 Resultado

Com isso configurado, seu site no Render **nunca vai dormir** e sempre estará disponível instantaneamente!


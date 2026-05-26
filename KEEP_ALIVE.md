# Manter Site Ativo (Keep Alive)

## ⚠️ Problema

Dependendo da hospedagem, o site pode sofrer lentidão inicial após períodos de inatividade. O monitoramento periódico ajuda a manter a resposta mais estável no domínio oficial.

## ✅ Solução Implementada

### GitHub Actions (Já Configurado)

Foi criado um workflow que faz ping no site a cada **14 minutos**, usando o domínio oficial.

**Arquivo:** `.github/workflows/keep-alive.yml`

**Como funciona:**
- Executa automaticamente a cada 14 minutos
- Faz uma requisição para `https://www.viasullocadora.com.br/`
- Mantém o serviço sempre "acordado"

**Status:** ✅ Já está ativo e funcionando!

## 🔧 Outras Opções (Alternativas)

### 1. UptimeRobot (Recomendado - Mais Confiável)

1. Acesse: https://uptimerobot.com
2. Crie conta gratuita
3. Adicione novo monitor:
   - **Monitor Type:** HTTP(s)
   - **URL:** https://www.viasullocadora.com.br/
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
   - **URL:** https://www.viasullocadora.com.br/
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
2. Veja se o workflow "Keep Site Alive" está executando
3. Verifique os logs para confirmar

## 🎯 Resultado

Com isso configurado, seu site tende a responder com mais consistência no domínio oficial e com menor chance de lentidão inicial.


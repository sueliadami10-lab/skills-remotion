# Habilidades Remotion — SUELI ADAMI Contabilidade de Precisão

Cópia das 12 habilidades oficiais do repositório remotion-dev/skills, baixadas em 29/10/2026, para criação de vídeos (Reels, Prosa de Varanda, Inspirações).

- Comece por `skills/remotion-best-practices` (direciona para as demais).
- Para instalar no Claude: compactar cada pasta de `skills/` em .zip e carregar em Configurações → Capacidades → Habilidades.
- Atenção: o software Remotion exige licença de empresa paga para empresas com fins lucrativos acima de certo porte — conferir remotion.dev/license.

## Funcionamento no Claude (testado em 29/10/2026)
- `scripts/preparar-ambiente.sh` cria o projeto, instala dependências e aponta o Remotion para o Chrome já instalado no ambiente (o download automático do Chrome é bloqueado pela rede do ambiente).
- `exemplos/TesteSueli-vertical.tsx`: vídeo de teste 1080×1920 (Reels/Stories) nas cores da marca (#A329CC, #7A1F99, #F6EAFB).
- Render: `npx remotion render <id> out/video.mp4`.

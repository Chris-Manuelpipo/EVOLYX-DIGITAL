#!/usr/bin/env bash
# Commits en attente — sans Co-authored-by. Depuis la racine du dépôt :
#   bash scripts/commit-pending.sh
set -euo pipefail
cd "$(dirname "$0")/.."

commit() {
  git add "$@"
  git commit -m "$MSG"
}

# Retire Co-authored-by: Cursor sur HEAD si présent (commit agent précédent)
if git log -1 --format='%B' | grep -q '^Co-authored-by: Cursor '; then
  MSG_CLEAN="$(git log -1 --format='%B' | grep -v '^Co-authored-by: Cursor ' | sed -e :a -e '/^\n*$/{$d;N;ba' -e '}')"
  git commit --amend -m "$MSG_CLEAN"
  echo "→ HEAD amendé sans trailer Cursor"
fi

MSG='Référence NGL et Prestige Pressing dans le sitemap et llms.txt.'
commit public/sitemap.xml public/llms.txt

MSG='Complète les mentions légales et l’hébergement Vercel.

Directeur de publication renseigné, section hébergement et doc checklist.'
commit \
  src/data/contact.js \
  src/pages/LegalNotice.jsx \
  src/pages/PrivacyPolicy.jsx \
  src/locales/fr/translation.json \
  src/locales/en/translation.json \
  docs/DONNEES_A_RENSEIGNER.md

MSG='Aligne l’email de contact sur evolyxcmr@gmail.com.

README EmailJS et JSON-LD de la page d’accueil.'
commit README.md index.html

MSG='Met à jour favicon.ico et apple-touch-icon.'
commit public/favicon.ico public/apple-touch-icon.png

MSG='Ajoute une règle Cursor interdisant les trailers Co-authored-by.

Script shell pour commits locaux sans attribution Cursor.'
commit .cursor/rules/git-commits.mdc scripts/commit-pending.sh

echo ""
echo "Terminé. Derniers commits :"
git log -6 --oneline
git status -s

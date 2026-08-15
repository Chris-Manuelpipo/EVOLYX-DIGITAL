export default function LegalNotice() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-evolyx-black mb-8">
          Mentions légales
        </h1>
        <div className="space-y-6 text-evolyx-gray leading-relaxed text-sm">
          <p>
            {/* TODO: Compléter avec les informations légales officielles (RCCM, NIU, forme juridique) */}
            EVOLYX Digital -- Branche développement logiciel du groupe EVOLYX.
            [Forme juridique] -- [N° RCCM] -- [N° NIU]
          </p>
          <p>Siège social : [Adresse], Yaoundé, Cameroun</p>
          <p>Directeur de publication : [Nom]</p>
          <p>Hébergement : [Hébergeur à préciser]</p>
        </div>
      </div>
    </div>
  );
}

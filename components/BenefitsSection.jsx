export default function BenefitsSection() {
  const benefits = [
    "🖌️ Showcase your portfolio",
    "💰 Earn crypto instantly",
    "🔗 Secure smart contract commissions",
    "🎨 Build your brand as an NFT artist",
  ];

  return (
    <section id="benefits" className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Platform Benefits</h2>
      <ul className="max-w-xl mx-auto space-y-4 text-lg">
        {benefits.map((item, idx) => <li key={idx} className="text-purple-300">{item}</li>)}
      </ul>
    </section>
  );
}
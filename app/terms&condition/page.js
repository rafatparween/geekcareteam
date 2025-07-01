'use client'

const Home = () => {
    return (
        <div className="bg-white p-10">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-8">General Terms & Conditions</h1>

            {/* Content */}
            <div className="space-y-8 text-gray-700 leading-relaxed">

                {/* Acceptance of General Terms & Conditions */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Acceptance of General Terms & Conditions</h2>
                    <p>
                        Thank you for visiting the <a href="https://www.printhubsolution.com" className="underline">www.printhubsolution.com</a> (“<strong>Site</strong>” or “<strong>Print Hub Solution</strong>”). Please read these General Terms and Conditions (“<strong>Terms</strong>”) carefully. These Terms govern your access and use of this Site, which is hosted by Cimpress India Private Limited, a company incorporated under the provisions of the Companies Act, 1956 with its registered office at ‘C Block’ Voltas Premises, T.B. Kadam Marg, Chinchpokli, Mumbai-400033.

                        By accessing or using this Site, you confirm that you are competent to contract under the relevant local laws and that you agree to be bound by these Terms and any additional guidelines, restrictions, or rules posted in connection with specific sections or services of this Site. All such additional posted guidelines, restrictions, or rules are hereby incorporated by reference into these Terms.

                        Print Hub Solution reserves the right to update these Terms at its discretion at any time without prior notice. Your continued use of the Site following modifications constitutes your acceptance of the modified Terms.
                    </p>
                    <p>
                        You also agree that we may provide all legal communications and notices to you electronically by posting them on our Site or by sending an email to the address provided during registration. You may withdraw your consent by contacting customer care, but doing so means discontinuing use of your account.
                    </p>
                </section>

                {/* Eligibility to Use */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Eligibility to Use</h2>
                    <p>Use of the Site is available only to persons who can legally contract under Indian Contract Act, 1872. Persons "incompetent to contract" (e.g., minors, undischarged insolvents) are not eligible to use the Site.</p>
                    <p>Minors must use or transact on the Site through their legal guardians or parents.</p>
                    <p>By accepting the Terms or using the Site, the user declares they are 18 years or older and capable of forming a binding contract.</p>
                </section>

                {/* Copyrighted Materials for Limited Use */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Copyrighted Materials for Limited Use</h2>
                    <p>
                        This Site contains graphics, layouts, text, software tools, and other content (“<strong>Content</strong>”) that are copyrighted by Cimpress India Private Limited or its licensors. All rights are reserved. You may not copy, publish, or distribute Content except as allowed in these Terms.

                        Print Hub Solution reserves the right to modify Content without notice. The logo design tools may be used by others, and Print Hub Solution does not guarantee uniqueness or non-infringement of your design. Seek legal advice regarding intellectual property before using any designs commercially.
                    </p>
                </section>

                {/* Use of Site */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Use of Site</h2>
                    <p>
                        You may use this Site to create, evaluate, and order products or services solely through Print Hub Solution (“Products”). No other use of the Content is authorized.

                        You are responsible for ensuring your use of any text, image, or design does not infringe on third-party rights. You agree not to upload, post, or transmit any unlawful, offensive, or inappropriate material.

                        Print Hub Solution reserves the right to refuse service, limit usage, or cancel orders without prior notice if Terms are violated.

                        Content produced or posted may not be used under the Representation of the People Act, 1951. You are solely responsible for compliance and liability.

                        Print Hub Solution disclaims responsibility for content produced by users. You release us from any liability arising from such content.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Home;

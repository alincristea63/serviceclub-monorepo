import React from 'react';

interface TypographyProps {
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Display Typography (Clash Display) */}
      <section>
        <h2 className="font-display-bold text-2xl text-navy-100 mb-4">
          Display Typography (Clash Display)
        </h2>
        <div className="space-y-4">
          <h1 className="font-display-bold text-6xl text-navy-100">
            Heading 1 - Bold
          </h1>
          <h2 className="font-display-semibold text-5xl text-navy-100">
            Heading 2 - SemiBold
          </h2>
          <h3 className="font-display-medium text-4xl text-navy-100">
            Heading 3 - Medium
          </h3>
          <h4 className="font-display-regular text-3xl text-navy-100">
            Heading 4 - Regular
          </h4>
        </div>
      </section>

      {/* Body Typography (Poppins) */}
      <section>
        <h2 className="font-display-bold text-2xl text-navy-100 mb-4">
          Body Typography (Poppins)
        </h2>
        <div className="space-y-4">
          <p className="font-body-bold text-xl text-navy-75">
            Large Text - Bold (Poppins)
          </p>
          <p className="font-body-semibold text-lg text-navy-75">
            Medium Text - SemiBold (Poppins)
          </p>
          <p className="font-body-medium text-base text-navy-75">
            Regular Text - Medium (Poppins)
          </p>
          <p className="font-body-regular text-base text-navy-50">
            Body Text - Regular (Poppins). Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-body-light text-sm text-navy-50">
            Small Text - Light (Poppins)
          </p>
        </div>
      </section>

      {/* Typography Scale */}
      <section>
        <h2 className="font-display-bold text-2xl text-navy-100 mb-4">
          Typography Scale
        </h2>
        <div className="space-y-2">
          <div className="font-display-bold text-9xl text-navy-100">9XL</div>
          <div className="font-display-bold text-8xl text-navy-100">8XL</div>
          <div className="font-display-bold text-7xl text-navy-100">7XL</div>
          <div className="font-display-bold text-6xl text-navy-100">6XL</div>
          <div className="font-display-bold text-5xl text-navy-100">5XL</div>
          <div className="font-display-bold text-4xl text-navy-100">4XL</div>
          <div className="font-display-bold text-3xl text-navy-100">3XL</div>
          <div className="font-display-bold text-2xl text-navy-100">2XL</div>
          <div className="font-display-bold text-xl text-navy-100">XL</div>
          <div className="font-body-regular text-lg text-navy-75">LG</div>
          <div className="font-body-regular text-base text-navy-75">Base</div>
          <div className="font-body-regular text-sm text-navy-75">SM</div>
          <div className="font-body-regular text-xs text-navy-75">XS</div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 className="font-display-bold text-2xl text-navy-100 mb-4">
          Usage Guidelines
        </h2>
        <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
          <div>
            <h3 className="font-display-semibold text-lg text-navy-100 mb-2">
              Clash Display
            </h3>
            <p className="font-body-regular text-navy-75">
              Use for headings and titles only. Available in Medium, SemiBold, and Bold weights. 
              Never use for body text or small sizes.
            </p>
          </div>
          <div>
            <h3 className="font-display-semibold text-lg text-navy-100 mb-2">
              Poppins
            </h3>
            <p className="font-body-regular text-navy-75">
              Use for body text, buttons, and UI elements. Available in Regular, Medium, SemiBold, and Bold weights. 
              Prioritize for smaller and longer pieces of text.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}; 
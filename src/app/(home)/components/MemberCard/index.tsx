import Image from 'next/image';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

type MemberCardProps = {
  name: string;
  cargo: string;
  image: string;
  linkedin?: string;
};

export function MemberCard({ name, cargo, image, linkedin }: MemberCardProps) {
  return (
    <div className="min-w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={128}
        height={128}
        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 128px"
        className="rounded-full h-32 w-32 object-cover border-4 border-white shadow-sm"
      />
      <div className="flex flex-row items-center justify-center gap-2">
        <h3 className="text-xl font-bold mt-4 text-gray-800">{name}</h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Perfil de ${name} no LinkedIn`}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300 mt-4"
          >
            <LinkedinIcon />
          </a>
        )}
      </div>
      <p className="text-gray-500 mt-1">{cargo}</p>
    </div>
  );
}

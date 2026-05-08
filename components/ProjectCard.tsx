import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-[#7c3aed] hover:shadow-lg hover:shadow-violet-100 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-gray-900 font-semibold text-lg group-hover:text-[#7c3aed] transition-colors">
            {project.name}
          </h3>
          {project.npmUrl && (
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs px-2 py-0.5 rounded-md bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 transition-colors font-mono"
            >
              npm
            </a>
          )}
        </div>
        <svg
          className="w-4 h-4 text-gray-400 group-hover:text-[#7c3aed] transition-colors flex-shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-violet-50 text-[#7c3aed] border border-violet-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

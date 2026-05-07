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
      className="group block bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#7c3aed] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-[#f5f5f5] font-semibold text-lg group-hover:text-[#7c3aed] transition-colors">
          {project.name}
        </h3>
        <svg
          className="w-4 h-4 text-[#71717a] group-hover:text-[#7c3aed] transition-colors flex-shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p className="text-[#71717a] text-sm mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

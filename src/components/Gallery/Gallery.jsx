/* eslint-disable react/prop-types */

import { CardActionArea } from "@mui/material";

const Gallery = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-8">
      {projects.map((project) => (
        <div key={project.id} onClick={() => onProjectClick(project)}>
          <CardActionArea>
            <div>
              {project.imgProjects.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project ${project.nameProjects}`}
                  className="w-full h-62 rounded-[1px] shadow-xl"
                />
              ))}
            </div>
          </CardActionArea>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

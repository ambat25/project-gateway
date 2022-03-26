import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Box } from "./styled/box";

export default function Reports({ data, keyId, subKey, keyTitle, indexer, reports }) {
  const [openedProject, setOpenedProject] = React.useState(null);
  return (
    <Box>
      {data?.map((row) => (
        <ProjectCard
          key={row?.[keyId]}
          isOpened={openedProject === row?.[keyId]}
          onToggle={() =>
            setOpenedProject(openedProject === row?.[keyId] ? null : row?.[keyId])
          }
          subKey={subKey}
          keyTitle={keyTitle}
          title={row.name}
          indexer={indexer}
          data={reports?.[row?.[keyId]]}
        />
      ))}
    </Box>
  );
}

const fetchExperienceData = async () => {
  const res = await fetch("/data/experienceData.json");
  if (!res.ok) throw new Error("Error fetching Experience Data");
  const data = await res.json();
  return data.experienceData || [];
};

export { fetchExperienceData };

const fetchEducationData = async () => {
  const res = await fetch("/data/educationData.json");
  if (!res.ok) throw new Error("Error fetching Education Data");
  const data = await res.json();
  return data.educationData || [];
};

export { fetchEducationData };

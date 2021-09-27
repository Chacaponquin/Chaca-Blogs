export const checkCreateForm = (createForm, newCategory) => {
  if (newCategory.category.length > 15) {
    return "El nombre de la nueva categoria es muy largo. Cambialo";
  }
  if (newCategory.description.length > 190) {
    return "La descripcion de la nueva categoria es muy largo. Cambialo";
  }

  if (
    createForm.category === "" ||
    createForm.content === "" ||
    createForm.resume === "" ||
    createForm.title === ""
  ) {
    return "Datos Incompletos";
  }

  if (createForm.title.length > 35) {
    return "El titulo de tu post es muy largo. Cambialo";
  }

  if (createForm.resume.length > 190) {
    return "El resumen de tu post es muy largo. Cambialo";
  }

  if (createForm.playlist.length > 35) {
    return "El nombre de la playlist es muy largo. Cambialo";
  }

  if (newCategory.category.length > 15) {
    return "El nombre de la nueva categoria es muy largo. Cambialo";
  }

  if (newCategory.description.length > 190) {
    return "La descripcion de la nueva categoria es muy largo. Cambialo";
  }
};

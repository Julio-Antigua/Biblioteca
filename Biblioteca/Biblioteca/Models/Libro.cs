using System;
using System.Collections.Generic;

#nullable disable

namespace Biblioteca.Models
{
    public partial class Libro
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Autor { get; set; }
        public string Genero { get; set; }
        public int Paginas { get; set; }
        public int IdEditorial { get; set; }

        public virtual Editorial IdEditorialNavigation { get; set; }
    }
}

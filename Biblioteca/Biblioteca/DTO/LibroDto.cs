using Biblioteca.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca.DTO
{
    public class LibroDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Autor { get; set; }
        public string Genero { get; set; }
        public int Paginas { get; set; }
        public int IdEditorial { get; set; }

       //public virtual EditorialDto EditorialNavigation { get; set; }
    }
}

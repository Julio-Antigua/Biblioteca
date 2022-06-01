using System;
using System.Collections.Generic;

#nullable disable

namespace Biblioteca.Models
{
    public partial class Editorial
    {
        public Editorial()
        {
            Libros = new HashSet<Libro>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Libro> Libros { get; set; }

       
    }
}

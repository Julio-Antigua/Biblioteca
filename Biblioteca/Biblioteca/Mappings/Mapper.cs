using AutoMapper;
using Biblioteca.DTO;
using Biblioteca.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca.Mappings
{
    public class Mapper: Profile
    {
        public Mapper()
        {
            CreateMap<Editorial, EditorialDto>();
            CreateMap<EditorialDto, Editorial>();


            CreateMap<Libro, LibroDto>();
            CreateMap<LibroDto, Libro>();
        }
        
    }
}


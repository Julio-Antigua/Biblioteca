using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Biblioteca.Models
{
    public partial class LibrosContext : DbContext
    {
        public LibrosContext()
        {
        }

        public LibrosContext(DbContextOptions<LibrosContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Editorial> Editorials { get; set; }
        public virtual DbSet<Libro> Libros { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        optionsBuilder.UseSqlServer("Name=Biblioteca");
        //    }
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Editorial>(entity =>
            {
                entity.ToTable("Editorial");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

               
            });

            modelBuilder.Entity<Libro>(entity =>
            {
                entity.ToTable("Libro");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Autor)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Genero)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IdEditorial).HasColumnName("ID_Editorial");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEditorialNavigation)
                    .WithMany(p => p.Libros)
                    .HasForeignKey(d => d.IdEditorial)
                    .HasConstraintName("LIBRO_FK");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

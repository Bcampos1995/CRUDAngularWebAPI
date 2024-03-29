﻿// <auto-generated />
using CRUDAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CRUDAPI.Migrations
{
    [DbContext(typeof(Contexto))]
    [Migration("20210729151609_conexaoBD")]
    partial class conexaoBD
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CRUDAPI.Models.Cargo", b =>
                {
                    b.Property<int>("CargoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DataAlteracao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataCadastro")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataExclusao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CargoId");

                    b.ToTable("Cargos");
                });

            modelBuilder.Entity("CRUDAPI.Models.Funcionario", b =>
                {
                    b.Property<int>("FuncionarioId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CPF")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataAdmissao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataAlteracao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataCadastro")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DataExclusao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UtilizaVT")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("FuncionarioId");

                    b.ToTable("Funcionarios");
                });
#pragma warning restore 612, 618
        }
    }
}

/*
Lista de obejtos de curso
 En la creacion de cursos copiar el objeto anterior para mayor facilidad
 */

const data =[
    {
    titulo1:"Farmacologia",
    titulo2:"Cardiovascular",
    parrafo:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    video:"VIDEO-HORAIZONTAL-Curso-farmacología-cardiovascular.mp4",

    //valoraciones

    valoraciones:"50%",
    estudiantes:"300",
    nivel:"avanzado",
    idioma:"español",

    //campo inicial

    informacion:"Aprende mas en el campo de los mecanismos en accion en 3D ",

    preguntaCurso:"¿Por qué estudiar Farmacología Cardiovascular en Cisfarm?",
    respuestaCurso:`Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,
   
    // csoto

    costo:"129.00",
    duracion:"14,2",
    lecciones:"9",
    modalidad:"Online y a tu ritmo",

    politicas:`Loremmm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    Donec massa sapien faucibus et molestie ac feugiat. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Ut aliquam purus sit amet
    luctus venenatis. Vel quam elementum pulvinar etiam non quam. Duis convallis convallis tellus id. Nunc faucibus a pellentesque sit amet porttitor.
    Nulla aliquet porttitor lacus luctus accumsan. Commodo odio aenean sed adipiscing diam donec. Rutrum tellus pellentesque eu tincidunt tortor aliquam 
    nulla. Morbi leo urna molestie at elementum eu. Et ultrices neque ornare aenean euismod elementum nisi. Leo integer malesuada nunc vel risus commodo
    viverra. Orci nulla pellentesque dignissim enim.Nisl tincidunt eget nullam non nisi est sit amet. Purus semper eget duis at tellus. Magnis dis
    parturient montes nascetur. Eget mi proin sed libero. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae congue eu consequat ac felis
    donec et odio pellentesque. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Id donec ultrices tincidunt arcu non. Nulla porttitor massa id
    neque aliquam vestibulum morbi blandit. Accumsan sit amet nulla facilisi morbi tempus iaculis. Amet tellus cras adipiscing enim eu turpis.Sem integer vitae justo eget
    magna fermentum iaculis eu non. At volutpat diam ut venenatis tellus in. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Eu feugiat pretium nibh
    ipsum consequat nisl vel pretium lectus. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Volutpat blandit aliquam etiam erat velit scelerisque in. Tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque dignissim enim sit amet venenatis. Viverra orci sagittis eu volutpat odio. Vulputate enim nulla aliquet porttitor lacus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fringilla urna porttitor rhoncus dolor purus non enim. Ipsum suspendisse ultrices gravida dictum fusce ut. Duis at tellus at urna condimentum mattis. Feugiat nisl pretium fusce id velit ut. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
    Aliquet enim tortor at auctor urna nunc. Sollicitudin nibh sit amet commodo nulla. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Nunc congue nisi vitae suscipit tellus mauris a. Quisque egestas diam in arcu. Pretium lectus quam id leo in vitae turpis massa sed. Placerat vestibulum lectus mauris ultrices eros in. Euismod quis viverra nibh cras pulvinar mattis. Sit amet justo donec enim diam vulputate ut. Faucibus ornare suspendisse sed nisi lacus. Ut placerat orci nulla pellentesque dignissim enim. Mi eget mauris pharetra et ultrices. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Tellus molestie nunc non blandit massa. Placerat orci nulla pellentesque dignissim. Elementum integer enim neque volutpat. Orci porta non pulvinar neque laoreet. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet volutpat consequat mauris nunc congue nisi vitae. Ut faucibus pulvinar elementum integer enim neque volutpat. Sem viverra aliquet eget sit amet tellus. Fringilla est ullamcorper eget nulla facilisi. Porttitor leo a diam sollicitudin. Aliquet enim tortor at auctor urna nunc id cursus. Neque ornare aenean euismod elementum nisi quis eleifend quam. Velit aliquet sagittis id consectetur. Congue mauris rhoncus aenean vel elit. Odio aenean sed adipiscing diam donec adipiscing. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Aliquam ut porttitor leo a diam sollicitudin tempor. Ut etiam sit amet nisl purus in mollis.`,

    acerca:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,

    beneficios:[
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
    ],
    requisitos:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat.Lorem ipsum.`,


        //docentes

    docentes:[
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente1",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente2",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente3",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente4",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
    ],

    //contenido del curso

    contenidoCurso:[
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
    ],

    //textos

    textoFinal:"Ut enim ad minim veniam, quis nostrud exercitation ullamcov laboris nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip",
    resumenFinal:"Este curso cuenta con # de temas por aprender",


},

{
    titulo1:"Farmacologia2",
    titulo2:"Cardiovascular2",
    parrafo:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    video:"VIDEO-HORAIZONTAL-Curso-farmacología-cardiovascular.mp4",

    //valoraciones

    valoraciones:"50%",
    estudiantes:"300",
    nivel:"avanzado",
    idioma:"español",

    //campo inicial

    informacion:"Aprende mas en el campo de los mecanismos en accion en 3D ",

    preguntaCurso:"¿Por qué estudiar Farmacología Cardiovascular en Cisfarm?",
    respuestaCurso:`Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,
   
    // csoto

    costo:"129.00",
    duracion:"14,2",
    lecciones:"9",
    modalidad:"Online y a tu ritmo",

    acerca:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,

    beneficios:[
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
    ],
    requisitos:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat.Lorem ipsum.`,

        //docentes

    docentes:[
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente1",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente2",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente3",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente4",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
    ],

    //contenido del curso

    contenidoCurso:[
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
    ],

    //textos

    textoFinal:"Ut enim ad minim veniam, quis nostrud exercitation ullamcov laboris nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip",
    resumenFinal:"Este curso cuenta con # de temas por aprender",


},
{
    titulo1:"Farmacologia3",
    titulo2:"Cardiovascular3",
    parrafo:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    video:"VIDEO-HORAIZONTAL-Curso-farmacología-cardiovascular.mp4",

    //valoraciones

    valoraciones:"50%",
    estudiantes:"300",
    nivel:"avanzado",
    idioma:"español",

    //campo inicial

    informacion:"Aprende mas en el campo de los mecanismos en accion en 3D ",

    preguntaCurso:"¿Por qué estudiar Farmacología Cardiovascular en Cisfarm?",
    respuestaCurso:`Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,
   
    // csoto

    costo:"129.00",
    duracion:"14,2",
    lecciones:"9",
    modalidad:"Online y a tu ritmo",

    acerca:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,

    beneficios:[
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
    ],
    requisitos:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat.Lorem ipsum.`,

        //docentes

    docentes:[
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente1",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente2",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente3",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente4",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
    ],

    //contenido del curso

    contenidoCurso:[
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
    ],

    //textos

    textoFinal:"Ut enim ad minim veniam, quis nostrud exercitation ullamcov laboris nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip",
    resumenFinal:"Este curso cuenta con # de temas por aprender",


},
{
    titulo1:"neurologia",
    titulo2:"cerebral",
    parrafo:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    video:"VIDEO-HORAIZONTAL-Curso-farmacología-cardiovascular.mp4",

    //valoraciones

    valoraciones:"50%",
    estudiantes:"300",
    nivel:"avanzado",
    idioma:"español",

    //campo inicial

    informacion:"Aprende mas en el campo de los mecanismos en accion en 3D ",

    preguntaCurso:"¿Por qué estudiar Farmacología Cardiovascular en Cisfarm?",
    respuestaCurso:`Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit, sed do eiusmod tempor
     incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,
   
    // csoto

    costo:"129.00",
    duracion:"14,2",
    lecciones:"9",
    modalidad:"Online y a tu ritmo",

    acerca:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum`,

    beneficios:[
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
        {item:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore `},
    ],
    requisitos:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat.Lorem ipsum.`,

        //docentes

    docentes:[
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente1",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente2",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente3",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
        {
            imagen:"sin_back.png",
            nombre:"Nombre del docente4",
            apellidos:"Apellidos del docente",
            titulo:"Quimico Farmaceutico"
        },
    ],

    //contenido del curso

    contenidoCurso:[
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
        {nombre:"Nombnre del tema",descripcion:"Pequena descripcion"},
    ],

    //textos

    textoFinal:"Ut enim ad minim veniam, quis nostrud exercitation ullamcov laboris nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip",
    resumenFinal:"Este curso cuenta con # de temas por aprender",


},


];
export {data};
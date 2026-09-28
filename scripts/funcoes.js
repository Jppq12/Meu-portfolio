const cursos = document.querySelectorAll('.cursos')

cursos.forEach(curso => {
    curso.addEventListener('mouseenter', () => {
        curso.classList.add('mostrar')
    })

    curso.addEventListener('mouseleave', () => {
        curso.classList.remove('mostrar')
    })
})
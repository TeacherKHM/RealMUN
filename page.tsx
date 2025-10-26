"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, FileText, Shield } from "lucide-react"
import Link from "next/link"

// Datos de ejemplo - puedes actualizar estos fácilmente
export const COMMITTEES = [
  {
    id: "csnu",
    name: "Consejo de Seguridad de las Naciones Unidas",
    acronym: "CSNU",
    topics: [
      "La situación en el Medio Oriente",
      "Amenazas a la paz y seguridad internacional causadas por actos terroristas",
    ],
  },
  {
    id: "agnu",
    name: "Asamblea General de las Naciones Unidas",
    acronym: "AGNU",
    topics: ["Desarrollo sostenible y cambio climático", "Derechos humanos y migración internacional"],
  },
  {
    id: "ecosoc",
    name: "Consejo Económico y Social",
    acronym: "ECOSOC",
    topics: ["Erradicación de la pobreza extrema", "Igualdad de género en el ámbito laboral"],
  },
  { id: "UE", name: "Union Europea", acronym: "UE", topics: ["tema 1", "tema 2", "tema 3"] },
]

export const INITIAL_COUNTRIES = [
  "México",
  "Estados Unidos",
  "Canadá",
  "Brasil",
  "Argentina",
  "Chile",
  "Colombia",
  "España",
  "Francia",
  "Alemania",
  "Reino Unido",
  "Italia",
  "Rusia",
  "China",
  "Japón",
  "India",
  "Corea del Sur",
  "Australia",
  "Sudáfrica",
  "Egipto",
]

interface Registration {
  name: string
  email: string
  school: string
  country: string
  committee: string
}

export default function MUNPage() {
  const router = useRouter()

  useEffect(() => {
    const currentUser = localStorage.getItem("mun-current-user")
    if (currentUser) {
      const user = JSON.parse(currentUser)
      if (user.role === "secretario") {
        router.push("/dashboard/secretario")
      } else {
        router.push("/dashboard/delegado")
      }
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('/united-nations-abstract-pattern.jpg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Globe className="h-20 w-20" />
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl text-balance">
              Modelo de Naciones Unidas
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100 text-pretty">
              Únete a la experiencia diplomática más importante de tu preparatoria. Representa a tu país, debate temas
              globales y construye un mundo mejor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/auth/registro">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Registrarse como Delegado
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comités</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{COMMITTEES.length}</div>
              <p className="text-xs text-muted-foreground">Diferentes comités disponibles</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Países Totales</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{INITIAL_COUNTRIES.length}</div>
              <p className="text-xs text-muted-foreground">Países disponibles para representar</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Experiencia Única</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-muted-foreground">Aprendizaje garantizado</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Committees Preview */}
      <section id="comites" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Comités Disponibles</h2>
          <p className="mt-2 text-muted-foreground">
            Regístrate para acceder a la información completa y seleccionar tu país
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {COMMITTEES.map((committee) => (
            <Card key={committee.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {committee.acronym}
                  </span>
                </div>
                <CardTitle className="text-lg">{committee.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <FileText className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Temas:</p>
                      <ul className="mt-1 space-y-1">
                        {committee.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            {idx + 1}. {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Modelo de Naciones Unidas - Formando líderes del mañana
          </p>
        </div>
      </footer>
    </div>
  )
}

package main

import (
	"fmt"
	"html/template"
	"os"

	"github.com/alecthomas/chroma"
	"github.com/alecthomas/chroma/styles"
	"github.com/efreitasn/egen"
)

func main() {
	chromaStyleB := styles.Get("swapoff").Builder()
	chromaStyleB.Add(chroma.Background, "bg:#0e0e0e")
	chromaStyleB.Add(chroma.LineHighlight, "bg:#171717")

	chromaStyle, err := chromaStyleB.Build()
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
	}

	err = egen.Build(egen.BuildConfig{
		InPath:      "./content",
		OutPath:     "./dist",
		ChromaStyle: chromaStyle,
		TemplateFuncs: template.FuncMap{
			"createdByLang": func(l *egen.Lang) string {
				switch l.Tag {
				case "en":
					return "Created"
				case "pt-BR":
					return "Criado"
				}

				return ""
			},
			"lastUpdatedByLang": func(l *egen.Lang) string {
				switch l.Tag {
				case "en":
					return "Last updated"
				case "pt-BR":
					return "Última atualização"
				}

				return ""
			},
			"editOnGitHubByLang": func(l *egen.Lang) string {
				switch l.Tag {
				case "en":
					return "Edit on GitHub"
				case "pt-BR":
					return "Editar no GitHub"
				}

				return ""
			},
			"getPostGitHubURL": func(postSlug string, l *egen.Lang) string {
				return fmt.Sprintf(
					"https://github.com/efreitasn/efreitasn.dev/blob/master/content/posts/%v/content_%v.md",
					postSlug,
					l.Tag,
				)
			},
			"getAnalyticsID": func() string {
				return os.Getenv("ANALYTICS_ID")
			},
		},
	})
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
	}
}

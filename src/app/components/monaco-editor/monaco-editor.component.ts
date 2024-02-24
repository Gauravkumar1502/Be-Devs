import { Component, ViewChild } from '@angular/core';
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  templateUrl: './monaco-editor.component.html',
  styleUrl: './monaco-editor.component.css',
  providers: [
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: {
        baseUrl: '/assets',
        defaultOptions: {
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          contextmenu: false,
        },
      },      
    },
  ],
})
export class MonacoEditorComponent {
  language: string = 'java';
  theme: string = 'vs-dark';
  code: string = this.getBoilerplateCode(this.language);
  editor: any;
  @ViewChild('editorBody', { static: false }) editorBody: any;

  constructor() { }
  
  // select tag on change event
  changeLanguage($event: Event) {
    this.language = ($event.target as HTMLSelectElement).value;
    this.code = this.getBoilerplateCode(this.language);
  }
  onInit(editor: any) {
    console.log("onInit() called",editor);
    this.editor = editor;
    let resizeObserver = new ResizeObserver(() => {
      this.editor.layout({
        width: this.editorBody.nativeElement.offsetWidth,
        height: this.editorBody.nativeElement.offsetHeight,
      });
    });
    resizeObserver.observe(this.editorBody.nativeElement);
  }
  // getBoilerplateCode(language: string): string
  getBoilerplateCode(language: string): string {
    switch (language) {
      case 'c':
        return '#include <stdio.h>\n\nint main(void) {\n\tprintf("Hello world!");\n\treturn 0;\n}';
      case 'cpp':
        return '#include <iostream>\n\nint main() {\n\tstd::cout << "Hello world!";\n\treturn 0;\n}';
      case 'java':
        return 'public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello world!");\n\t}\n}';
      default:
        return '';
    }
  }
}

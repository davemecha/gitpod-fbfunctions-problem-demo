# Demo to showcase autocomplete problems on firebase projects

Steps to reproduce:

1. Open Gitpod from `master`
2. Open `src/app/tab3/tab3.page.ts`
3. Add line `private test2: ReplaySubject<boolean> = new ReplaySubject();` to class and autocomplete `ReplaySubject`.

   => This will automatically add the import for `ReplaySubject`.

4. Add this to constructor and try to autocomplete the `map` operator from `rxjs/operators`.

   ```
       this.test.pipe(
         map
       )
   ```

   => The autocompletion is not available.
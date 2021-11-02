How to reproduce:

1. Pull this repo

```
git clone https://github.com/TMInnovations/prisma-nestjs-graphql-failing.git
```

2. Spin up local db

```
docker run -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -e POSTGRES_DB=backend -p 5432:5432 postgres
```

3. Install deps and push db

```
npm install
npx prisma db push
```

4. Run

```
npm run start:debug
```

5. Open `https://localhost:3000/graphql` and run:

```

mutation CreateScanWithParcel {
  createScan(
    createScanInput: {
      data: "2328570201"
      parcel: { create: { customer: {create: {}} } }
    }
  ) {
    id
  }
}
```

6. See the Error rising:

```
Invalid `this.prisma.scan.create()` invocation in      
C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\src\models\scan\scan.service.ts:17:29
  14 // CRUD
  15
  16 create(createScanInput: ScanCreateInput) {        
→ 17   return this.prisma.scan.create({
         data: {
           data: '2328570201',
           parcel: {
           ~~~~~~
             create: {
               customer: {
                 create: {}
               }
             }
           }
         }
       })

Unknown arg `parcel` in data.parcel for type ScanUncheckedCreateInput. Did you mean `id_parcel`? Available args:
type ScanUncheckedCreateInput {
  id?: String
  data: String
  id_parcel?: String | Null
}


    at Document.validate (C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:37399:19)
    at PrismaService._executeRequest (C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:39786:17)    at consumer (C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:39731:23)
    at C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:39733:47
    at AsyncResource.runInAsyncScope (async_hooks.js:197:9)
    at PrismaService._request (C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:39733:25)       
    at request (C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:39836:77)
    at _callback (C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:40041:14)
    at PrismaPromise.then (C:\Users\tm\TmiCloud\2_TMI\Projects\2021\01_DEAD_LAS2\03_Failing\prisma-\node_modules\@prisma\client\runtime\index.js:40048:23)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)

```

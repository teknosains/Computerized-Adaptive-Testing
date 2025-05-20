import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Clock, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { getAllTests } from "~/models/test.server";
import { requireUser } from "~/utils/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request);
  const tests = await getAllTests();
  return json({ tests });
}

export default function TestsIndex() {
  const { tests } = useLoaderData<typeof loader>();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Available Tests</h1>
          <Link to="/dashboard" className="btn btn-outline">
            Back to Dashboard
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
                  <p className="text-gray-600 mb-4">{test.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{test.estimatedTime} mins</span>
                    
                    <Users className="h-4 w-4 mr-1" />
                    <span>{test.completions} completed</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {test.tags.map((tag, i) => (
                      <span key={i} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-accent-500 mr-1" />
                      <span className="text-sm font-medium">
                        {test.difficulty}
                      </span>
                    </div>
                    
                    <Link to={`/tests/${test.id}`} className="btn btn-primary">
                      Start Test
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {tests.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tests available yet</h3>
              <p className="text-gray-600">Check back soon for new assessments.</p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
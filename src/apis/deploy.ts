import { deployInstance } from './instance';

export async function getPods() {
  return deployInstance.get('/pods/test2');
}

export async function deployPod({ templateName }: { templateName:string }) {
  return deployInstance.post('/deploy', { templateName });
}

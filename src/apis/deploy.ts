import { deployInstance } from './instance';

export async function getNamespaces() {
  return deployInstance.get('/list');
}

export async function getPods({ namespace }: { namespace: string }) {
  return deployInstance.get(`/${namespace}/pods`);
}

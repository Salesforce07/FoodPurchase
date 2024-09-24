public with sharing class ProductController {
    @AuraEnabled
    public static List<Product2> getProducts(){
          // Query to get product records
          List<Product2> products = [SELECT Id, Name, Type FROM Product2];

          // Map to store image url for each product
          Map<Id, List<String>> productImagesMap = new Map<Id, List<String>>();
  
          // Query to get content versions associated with products
          List<ContentDocumentLink> contentLinks = [SELECT ContentDocumentId, LinkedEntityId FROM ContentDocumentLink WHERE LinkedEntityId IN :products];
  
          // Collect ContentDocumentIds
          Set<Id> contentDocumentIds = new Set<Id>();


          
          for (ContentDocumentLink link : contentLinks) {
              contentDocumentIds.add(link.ContentDocumentId);
          }
  
          // Query to get the VersionDataUrl for each ContentDocument
          List<ContentVersion> contentVersions = [SELECT Id, ContentDocumentId, VersionDataUrl FROM ContentVersion WHERE ContentDocumentId IN :contentDocumentIds];
        
    }

}
 
